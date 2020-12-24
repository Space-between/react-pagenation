import React from 'react';
import { act, render, fireEvent, waitFor } from '@testing-library/react';
import Search from '../Search';

describe('Button component', () => {
	beforeEach(() => {
		Object.defineProperty(window, 'matchMedia', {
			writable: true,
			value: jest.fn().mockImplementation((query) => ({
				matches: false,
				media: query,
				onchange: null,
				createElement: jest.fn(),
				addListener: jest.fn(), // Deprecated
				removeListener: jest.fn(), // Deprecated
				addEventListener: jest.fn(),
				removeEventListener: jest.fn(),
				dispatchEvent: jest.fn(),
			})),
		});
		// beforeEach메소드는 테스트케이스에서 테스트를 실행하기 전에 실행해주는 메소드이다. React에서 componentwillmount와 유사하다.
	});

	afterEach(() => {
		// afterEach메소드는 테스트케이스에서 테스트를 종료한 후에 실행해주는 메소드이다. React에서 componentdidmount와 유사하다.
	});
	beforeAll(() => {
		Object.defineProperty(window, 'matchMedia', {
			writable: true,
			value: jest.fn().mockImplementation((query) => ({
				matches: false,
				media: query,
				onchange: null,
				createElement: jest.fn(),
				addListener: jest.fn(), // Deprecated
				removeListener: jest.fn(), // Deprecated
				addEventListener: jest.fn(),
				removeEventListener: jest.fn(),
				dispatchEvent: jest.fn(),
			})),
		});
	});
	test('modal visible', async () => {
		const wrapper = render(<Search />);
		const searchBtn = wrapper.getByTestId('test-search').getElementsByClassName('ant-input-search-button').item(0);
		if (searchBtn) {
			act(() => {
				fireEvent.click(searchBtn);
			});
		}
		console.log('searchBtn', searchBtn);
		// const message = document.body.getElementsByClassName('ant-message-notice').length; // 안트 메세지
		// console.log('message', message);
		await waitFor(() => {
			const searchResult = wrapper.getByTestId('resultli_1').innerHTML.indexOf('야옹이'); // indexOf메소드를 이용하여 특정 문자가 시작되는 index값을 구할 수 있다. 지금 내가 찾고자 하는 것은 "야옹이(웹툰작가) - 나무위키"에 있는 야옹이를 찾는 것이므로 0이 나온다.
			console.log('html문서나오게 하기', wrapper.getByTestId('resultli_1').innerHTML);
			console.log('searchResult', searchResult);
			expect(searchResult).toBe(0);
			expect(1).toBe(1);
		});
	});
});
