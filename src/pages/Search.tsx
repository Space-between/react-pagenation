import React, { useState } from "react";
import { Input } from "antd";
import axios from "axios";

const { Search } = Input;

export default () => {
  const [info, setInfo] = useState<Array<object> | null>(null);
  // console.log("info", info);
  const onSearch = async (value: string) => {
    try {
      await axios({
        method: "get",
        url: `https://dapi.kakao.com/v2/search/web?query=${value}&size=50`,
        headers: { Authorization: "KakaoAK 6c0bb4f5679728a4f6ddcef0e5eb6bd8" },
      }).then(function (response) {
        console.log(response);
        const abc = response.data.documents;
        setInfo(abc);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Search
        placeholder="카카오 API를 이용한 다음 검색창"
        onSearch={onSearch}
        enterButton
      />
      {console.log("info", typeof info)}
      <ul>
        {info
          ? info.map((data: any) => (
              <a href={data.url} style={{ color: "black" }}>
                <li>{data.contents}</li>
              </a>
            ))
          : null}
      </ul>
    </div>
  );
};
