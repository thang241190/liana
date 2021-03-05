import React from "react"
import { CountUp } from "use-count-up"

import "./company.scss"

import company from "./images/company.jpg"
import products from "./images/products.jpg"
import contact from "./images/contact.jpg"

const CompanyComponent: React.FC = () => {
	const isCounting = true
	// const [isCounting, setIsCounting] = useState(false)
	// let scrollY: number = 0
	// function scroll() {
	// 	const companySection = document.querySelector(".company") as HTMLElement
	// 	scrollY = window.pageYOffset
	// 	if (scrollY > companySection.getBoundingClientRect().top) {
	// 		setIsCounting(true)
	// 	}
	// }

	// useEffect(() => {
	// 	function watchScroll() {
	// 		window.addEventListener("scroll", scroll)
	// 	}
	// 	watchScroll()
	// 	return () => {
	// 		window.removeEventListener("scroll", scroll)
	// 	}
	// }, [])
	return (
		<div className='company'>
			<div className='container'>
				<div className='col'>
					<a href='/#' className='item'>
						<img src={company} alt='Company' />
						<div className='text'>
							<span>Company</span>
						</div>
					</a>
				</div>
				<div className='col'>
					<a href='/#' className='item'>
						<img src={products} alt='Products' />
						<div className='text'>
							<span>Products</span>
						</div>
					</a>
				</div>
				<div className='col'>
					<a href='/#' className='item'>
						<img src={contact} alt='Contact' />
						<div className='text'>
							<span>Contact</span>
						</div>
					</a>
				</div>
			</div>
			<div className='statistics'>
				<div className='container'>
					<div className='stats-item'>
						<div className='stats-info'>
							<i className='fas fa-briefcase'></i>
							<p className='number'>
								<span className='count-effect'>
									<CountUp
										isCounting={isCounting}
										end={3000}
										easing='easeOutCubic'
									/>
								</span>
								<span className='placeholder'>3000</span>
							</p>
							<p className='title'>Clients</p>
						</div>
					</div>
					<div className='stats-item'>
						<div className='stats-info'>
							<i className='far fa-smile'></i>
							<p className='number'>
								<span className='count-effect'>
									<CountUp
										isCounting={isCounting}
										end={180}
									/>
								</span>
								<span className='placeholder'>180</span>
							</p>
							<p className='title'>Employees</p>
						</div>
					</div>
					<div className='stats-item'>
						<div className='stats-info'>
							<i className='fas fa-globe-americas'></i>
							<p className='number'>
								<span className='count-effect'>
									<CountUp
										isCounting={isCounting}
										end={10000}
									/>
								</span>
								<span className='placeholder'>10000</span>
							</p>
							<p className='title'>Daily users</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default CompanyComponent
