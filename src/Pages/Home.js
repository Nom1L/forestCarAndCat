import React, { Component } from 'react';
import { Button, Card, CardGroup, Container, Row} from 'react-bootstrap';
import CorouselBox from '../Components/CorouselBox';
import carbmv from '../assets/carbmv.jpeg';
import carskyline from '../assets/carskyline.jpeg';
import carporshe from '../assets/carporshe.jpeg';
import carbugati from '../assets/carbugati.jpeg'

export default class Home extends Component {
	render() {
		return (
			<>
				<CorouselBox/>
				<Container>
					<h2 className="text-center m-4">Our car</h2>
					<CardGroup className="m-4">
						<Row  md={2}>
							<Card.Img style={{width: 400}} variant="top" src={ carbmv }/>
							<Card.Body className="mt-4">
								<Card.Title>Car BMV</Card.Title>
								<Card.Text>
								BMW AG рус. Бэ-Эм-Вэ́ — немецкий производитель автомобилей, мотоциклов, двигателей, а также велосипедов. Более 45 % акций принадлежит семье Квандт.
								</Card.Text>
								<Button variant="primary">About Car</Button>
							</Card.Body>
						</Row>
						<Row  md={2} className="mt-5">
							<Card.Body className="mt-4">
								<Card.Title>Car Nissan</Card.Title>
								<Card.Text>
								Nissan Motor Co., Ltd. — японский автопроизводитель, один из крупнейших в мире. Компания основана в 1933 году. Штаб-квартира находится в городе Иокогама. Входит в Альянс Renault–Nissan–Mitsubishi.
								</Card.Text>
								<Button variant="primary">About Car</Button>
							</Card.Body>
							<Card.Img style={{width: 400}} variant="buttom" src={ carskyline }/>
						</Row>
						<Row  md={2} className="mt-5">
							<Card.Img style={{width: 400}} variant="top" src={ carporshe }/>
							<Card.Body className="mt-3">
								<Card.Title>Car Porsche</Card.Title>
								<Card.Text>
								Porsche AG — немецкий производитель автомобилей и солнцезащитных очков, основанный конструктором Фердинандом Порше в 1931 году, в настоящее время — дочерняя структура Porsche Automobil Holding. Штаб-квартира и основной завод находятся в Штутгарте, Германия.
								</Card.Text>
								<Button variant="primary">About Car</Button>
							</Card.Body>
						</Row>
					</CardGroup>
				</Container>
			</>
		)
	}
}
