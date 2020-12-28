import React from 'react';

const Pagination = ({ totalPosts, paginate }) => {
	const pageNumber = [];

	// Math.ceil: 올림
	for (let i = 1; i <= Math.ceil(totalPosts / 10); i++) {
		// Math.ceil(totalPosts / postsPerPage)에서 Math.ceil는 소수값이 존재할 때 값을 올리는 역할을 하는함수인데 totalPosts는 100이고 postsPerPage는 10이니까 이걸 나누면 10이된다.
		pageNumber.push(i); // i가 처음에는 1이고 1씩 증가되니까 1부터 10이 될때까지 pageNumber배열안에 1씩 증가되는 i를 넣어달라는 뜻이다.
	}

	return (
		<ul className="pagination" style={{ display: 'flex', flexDirection: 'row' }}>
			{pageNumber.map((pageNum) => (
				<li
					key={pageNum}
					className="pagination_item"
					onClick={() => paginate(pageNum)}
					style={{ listStyle: 'none', marginLeft: '10px' }}
				>
					{pageNum}
				</li>
			))}
		</ul>
	);
};

export default Pagination;
