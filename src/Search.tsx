import React, { useState } from 'react';
import { Input, message } from 'antd';
import axios from 'axios';

const { Search } = Input;
interface KakaoSearchResult {
	contents: string;
	datetime: string;
	title: string;
	url: string;
}

export default () => {
	const [info, setInfo] = useState<Array<KakaoSearchResult> | null>(null);
	// console.log("info", info);
	const onSearch = async (value: string) => {
		try {
			await axios({
				method: 'get',
				url: `https://dapi.kakao.com/v2/search/web?query=${value}&size=50`,
				headers: { Authorization: 'KakaoAK 6c0bb4f5679728a4f6ddcef0e5eb6bd8' },
			}).then((response) => {
				console.log(response);
				const abc = response.data.documents;
				setInfo(abc);
			});
		} catch (error) {
			console.error(error);
			message.info('검색결과가 없습니다.');
		}
	};

	return (
		<div data-testId="test-search">
			<Search placeholder="카카오 API를 이용한 다음 검색창" onSearch={onSearch} enterButton defaultValue="블랙핑크" />
			<ul className="ul">
				{info
					? info.map((data: KakaoSearchResult, index: number) => (
							<a key={index} href={data.url} target="_blank" style={{ color: 'black' }}>
								<li data-testId={`resultli_${index}`}>
									{data.title
										.replace(/(<([^>]+)>)/gi, '')
										.replace(/&#34;/gi, '')
										.replace(/&#39;/gi, '')
										.replace(/&amp;/gi, '')}
									<br />
									작성시간 : {data.datetime}
									<br />
									{data.contents
										.replace(/(<([^>]+)>)/gi, '')
										.replace(/&#34;/gi, '')
										.replace(/&#39;/gi, '')
										.replace(/&amp;/gi, '')}
								</li>
							</a>
					  ))
					: null}
			</ul>
		</div>
	);
};
