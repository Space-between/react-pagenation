import React, { useState } from 'react';
import { Input, message, Pagination } from 'antd';
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
	const [searchText, setSearchText] = useState<string>('');

	const onSearch = async () => {
		searchApi(1);
	};

	const searchApi = async (num: number) => {
		if (searchText) {
			try {
				await axios({
					method: 'get',
					url: `https://dapi.kakao.com/v2/search/web?query=${searchText}&size=50&page=${num}`,
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
		}
	};

	const numberRelay = (num: number) => {
		console.log('num', num);
		searchApi(num);
	};

	const party = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log('e', e.target.value);
		setSearchText(e.target.value);
	};

	return (
		<div data-testid="test-search">
			<Search placeholder="카카오 API를 이용한 다음 검색창" onSearch={onSearch} onChange={party} enterButton />
			<ul className="ul">
				{info
					? info.map((data: KakaoSearchResult, index: number) => (
							<a key={index} href={data.url} target="_blank" style={{ color: 'black' }}>
								<li data-testid={`resultli_${index}`}>
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
			{info ? <Pagination defaultCurrent={1} total={3760} onChange={numberRelay} /> : null}
		</div>
	);
};
