import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import forestone from '../assets/forestOne.jpeg';
import foresttwo from '../assets/forestTwo.jpeg';
import forestthree from '../assets/forestThree.jpeg';

export default class CorouselBox extends Component {
	render() {
		return (
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={ forestone }
						alt="Forest"
					/>
					<Carousel.Caption>
						<h3>Forest One</h3>
						<p>Этот лес Смерти ВХАХАХАХААХ и это не мудрое дерево</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={ foresttwo }
						alt="Forest"
					/>
					<Carousel.Caption>
						<h3>Forest Two</h3>
						<p>Этот лес зеленый и это не мудрое дерево</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={ forestthree }
						alt="Forest"
					/>
					<Carousel.Caption>
						<h3>Forest Three</h3>
						<p>Этот лес серый и это не мудрое дерево</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		)
	}
}
