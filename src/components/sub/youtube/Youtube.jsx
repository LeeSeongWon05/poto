import Layout from '../../common/layout/Layout';
import Modal from '../../common/modal/Modal';
import './Youtube.scss';
import { useEffect, useState } from 'react';
export default function Youtube() {
	const [Youtube, setYoutube] = useState([]);
	const [IsModal, setIsModal] = useState(false);
	const [Index, setIndex] = useState(0);

	//async await로 동기화 코드를 좀더 깔끔하게 정리
	const fetchYoutube = async () => {
		const api_key = process.env.REACT_APP_YOUTUBE_API;
		const baseURL = 'https://www.googleapis.com/youtube/v3/playlistItems';
		const pid = 'PL9I0cGMkw7P6QXU1F9HI0JE370vyxQsV3';
		const num = 5;
		const resultURL = `${baseURL}?key=${api_key}&part=snippet&playlistId=${pid}&maxResults=${num}`;

		const data = await fetch(resultURL);
		const json = await data.json();
		setYoutube(json.items);
	};

	useEffect(() => {
		fetchYoutube();
	}, []);

	return (
		<>
			<Layout title={'Youtube'}></Layout>

			{IsModal && (
				<Modal setIsModal={setIsModal}>
					<iframe
						src={`https://www.youtube.com/embed/${Youtube[Index].snippet.resourceId.videoId}`}
						title='youtube'
					></iframe>
				</Modal>
			)}
		</>
	);
}

/*
	리액트는 단방향 데이터 바인딩
	- 부모에서 자식으로 데이터 전달가능하지만 자식에서 부모로는 데이터를 전달 불가
	- props전달, children 전달
	
	리액트에서 자식 컴포넌트에서는 직접적으로 부모 컴포넌트의 state값 변경이 불가
	- 해결방법 부모의 state변경함수를 자식 컴포넌트로 전달
	- 자식컴포넌트에서는 전달받은 state변경함수로 간접적으로 부모 state값 변경가능	
	promsie .then구문을 좀더 구조적으로 짜는 방법 (async await) -> then구문을 쓸 필요가 없어짐
	async await 사용조건
	- promise반환함수를 wrapping처리
	- wrapping된 함수에 async 적용
	- promise반환함수 앞쪽에 await 적용
	- await 적용되어 있는 다음 코드가 무조건 동기화 처리
*/
