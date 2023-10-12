import Layout from '../../common/layout/Layout';
import './Members.scss';

export default function Members() {
	return (
		<Layout title={'Members'}>
			<div class='inner'>
				<h1 className='title'>Our Team</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio!</p>
				<div class='wrap'>
					<article>
						<img src='img/member1.jpg' alt='' class='pic' />
						<div class='txtBox'>
							<h2>Lorem ipsum dolor sit.</h2>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, odio.</p>
						</div>
					</article>
					<article>
						<img src='img/member2.jpg' alt='' class='pic' />
						<div class='txtBox'>
							<h2>Lorem ipsum dolor sit.</h2>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, odio.</p>
						</div>
					</article>
					<article>
						<img src='img/member3.jpg' alt='' class='pic' />
						<div class='txtBox'>
							<h2>Lorem ipsum dolor sit.</h2>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, odio.</p>
						</div>
					</article>
					<article>
						<img src='img/member4.jpg' alt='' class='pic' />
						<div class='txtBox'>
							<h2>Lorem ipsum dolor sit.</h2>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, odio.</p>
						</div>
					</article>
				</div>
			</div>
		</Layout>
	);
}
