import React from "react";
import { Button, Grid } from "@material-ui/core";
import { GiInfinity, GiClockwork } from "react-icons/gi";
import { DiDocker, DiOpensource } from "react-icons/di";
import { VscExpandAll } from "react-icons/vsc";
import { AiTwotoneApi } from "react-icons/ai";
import { BiDesktop } from "react-icons/bi";

import { useHistory } from "react-router-dom";
import Header from "./Header";
import { PieChart, WordChart } from "./Charts.js";
import TechStack from "./Techstack";
import Footer from "./Footer";
import start_image from "./images/IT_Service_Management.png";
import Lottie from "react-lottie";
import landingAnimation from "./images/landingAnimation.json";
// import FadeIn from "../utils/FadeIn";

import "./Landing.css";

const Landing = () => {
	let history = useHistory();

	const defaultOptions = {
		loop: true,
		autoplay: true,
		// here is where we will declare lottie animation
		// "animation" is what we imported before 
		animationData: landingAnimation,
		rendererSettings: {
		   preserveAspectRatio: "xMidYMid slice",
		},
	};
  
	return (
		<div className="landing">
			<Header />
			<div className="section-content rowC section1" paddingbottom="0px">
				<Grid container>
					<Grid
						style={{ paddingleft: "0px", textAlign: "left" }}
						item
						md={6}
						xs={12}
					>
						<br />
						<button
							style={{
								background:
									"linear-gradient(90deg, rgba(29, 36, 63, 1) 5%, rgba(35, 46, 79, 1) 96%)",
								borderRadius: "50px",
								padding: "15px",
								color: "white",
								fontSize: "15px",
							}}
						>
							Aerothon 4.0
						</button>
						<br />
						<h1 style={{ padding: "10px", fontSize: "50px" }}>
							Noob-To-Pro
						</h1>
						<h3 style={{ padding: "10px", color: "gray" }}>
							An efficient cloud-based system capable of providing
							support and assistance that lets you build native apps using a cross-platform UI toolkit. 
							The highlighting features would be :{" "}
							<ul>
								<li>
									A jumpstart on the development process
								</li>
								<li>
									Freedom of choice on the Tech-Stacks
								</li>
								<li>
									Implements best practices and principles
								</li>
							</ul>
						</h3>
						<br />
						<Button
							variant="contained"
							color="primary"
							onClick={() => history.push("/generate-WebApp")}
						>
							Go to Console
						</Button>
						&nbsp;&nbsp;&nbsp;
						<Button
							variant="outlined"
							color="primary"
							href="https://github.com/Aerothon-NTP/boilerplate-gen"
						>
							Github
						</Button>
						&nbsp;&nbsp;&nbsp;
					</Grid>
					<Grid
						className="inner-content"
						style={{ paddingLeft: "0px" }}
						item
						md={6}
						xs={12}
					>
						<Lottie options={defaultOptions} height={500} width={650} />

					</Grid>
				</Grid>
			</div>

			<div className="section-content section3">
				<div className="inner-content">
					<h1 className="Headers">ABOUT THE PROJECT</h1>
					<br />
					<Grid container>
						<Grid
							item
							md={6}
							sm={12}
							xs={12}
							style={{ paddingLeft: "20px", textAlign: "left" }}
						>
							<h1 style={{ color: "lightgreen" }}>
								A cross-platform UI toolkit that targets the mobile, web and desktop form factors on Android, iOS, macOS, Windows.
							</h1>
							<h3 style={{ color: "gray" }}>
								NTP(Noob-To-Pro) is web application to create a strong cross-platform framework with the modern architecture. 
								A developer platform for building all kinds of web, mobile and desktop applications 
								across different frameworks based on the requirement which also showcases the basic integration 
								between frontend and backend of the application. This innovative application is build using a layered approach 
								with Multi-Tenancy, Modular Design, and well-documented with Solid Principles to support these applications.
							</h3>
						</Grid>
						<Grid
							item
							md={6}
							sm={12}
							style={{
								paddingTop: "40px",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<PieChart />
						</Grid>
					</Grid>
				</div>
			</div>

			<div
				className="section-content section2"
				style={{ background: "#111" }}
			>
				<h1 className="Headers">FEATURES</h1>
				<Grid container>
					<Grid className="box" item lg={3} md={4} sm={6} xs={12}>
						<VscExpandAll size="90px" color="blue" />
						<h2>Scalable Architecture</h2>
						<h5 style={{ color: "gray" }}>
							An architecture that can scale up to meet increased
							work loads.
						</h5>
					</Grid>
					<Grid className="box" item lg={3} md={4} sm={6} xs={12}>
						<DiDocker size="90px" color="blue" />
						<h2>Dockerization of Server Script</h2>
						<h5 style={{ color: "gray" }}>
							Automates the deployment of software applications
							inside containers by providing an additional layer
							of abstraction and automation of OS-level
							virtualization.
						</h5>
					</Grid>
					<Grid className="box" item lg={3} md={4} sm={6} xs={12}>
						<BiDesktop size="90px" color="blue" />
						<h2>Responsive Web App Development</h2>
						<h5 style={{ color: "gray" }}>
							Designs that accommodate different screen sizes, so
							the content looks great on any screen size.
						</h5>
					</Grid>
					<Grid className="box" item lg={3} md={4} sm={6} xs={12}>
						<AiTwotoneApi size="90px" color="blue" />
						<h2>Use of Inhouse Developed APIs</h2>
						<h5 style={{ color: "gray" }}>
							Rather than being dependent of some thrid party
							library, we have Inhouse custom APIs.
						</h5>
					</Grid>
					<Grid className="box" item lg={3} md={4} sm={6} xs={12}>
						<DiOpensource size="90px" color="blue" />
						<h2>Use of OpenSource Technologies</h2>
						<h5 style={{ color: "gray" }}>
							Open source is generally much more cost-effective
							than a proprietary solution. They also give
							enterprises the ability to start small and scale.
						</h5>
					</Grid>
					<Grid className="box" item lg={3} md={4} sm={6} xs={12}>
						<GiInfinity size="90px" color="blue" />
						<h2>Continuous Integration and Deployment Pipeline</h2>
						<h5 style={{ color: "gray" }}>
							Monitoring and automating to improve the process of
							application development, integration, testing
							phases, delivery and deployment.
						</h5>
					</Grid>
					<Grid className="box" item lg={3} md={4} sm={6} xs={12}>
						<GiClockwork size="90px" color="blue" />
						<h2>High Availability and Failover Architecture </h2>
						<h5 style={{ color: "gray" }}>
							The system instantly redirects requests to a backup
							system in case of a failure, ensuring maximum
							systems availability.
						</h5>
					</Grid>
				</Grid>
			</div>

			<div className="section-content">
				<WordChart />
			</div>

			<div
				className="section-content section5"
				style={{ padding: "0px", background: "#111" }}
			>
				<div className="inner-content">
					<div className="inner-content">
						<h1 className="Headers">TECH-STACKS AVAILABLE</h1>
						<TechStack />
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Landing;
