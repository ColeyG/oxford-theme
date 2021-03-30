import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';

const resume = () => (<div className="cl-wrapper">
    <div className="cl-page">
        <Header mainTitle="Cole Geerts" />
        <div className="cl-page-content page-resume">
            <div className="resume-area">
                <h2>Resume</h2>
                <div className="resume-download">
                    <a className="cl-btn-primary" href="cole-geerts-resume.pdf" download>Download PDF</a>
                    <a className="cl-btn-tertiary" href="cole-geerts-resume.docx" download>Download docx</a>
                </div>
                <div className="resume">
                    <h2>Cole Geerts</h2>
                    <h3>Web Developer</h3>
                    <div className="resume-body">
                        <p className="resume-objective">Recent graduate with an Advanced Diploma in Interactive Media, aiming to leverage my analytical acumen and passion for web and
software development. I am an ambitious young professional who has never failed to meet project deadlines and service levels.</p>
                        <div className="resume-content">
                            <div className="resume-skills">
                                <h3>Skills</h3>
                                <ul>
                                    <li><strong>Languages</strong></li>
                                    <li>JavaScript</li>
                                    <li>PHP</li>
                                    <li>SQL</li>
                                    <li>Python</li>
                                    <li>C/C++</li>
                                </ul>
                                <ul>
                                    <li><strong>Web Development</strong></li>
                                    <li>React</li>
                                    <li>Vue</li>
                                    <li>jQuery</li>
                                    <li>CSS, Sass</li>
                                    <li>SEO</li>
                                    <li>AODA</li>
                                </ul>
                                <ul>
                                    <li><strong>Frameworks</strong></li>
                                    <li>Magento</li>
                                    <li>Drupal</li>
                                    <li>Laravel</li>
                                    <li>Wordpress</li>
                                    <li>Gatsby</li>
                                </ul>
                                <ul>
                                    <li><strong>Tools</strong></li>
                                    <li>Google Cloud Platform</li>
                                    <li>Linux</li>
                                    <li>Git, CI/CD</li>
                                    <li>Arduino, Raspberry Pi</li>
                                    <li>Adobe Illustrator</li>
                                    <li>AWS</li>
                                </ul>
                            </div>
                            <div className="resume-experience">
                                <h3>Professional Experience</h3>
                                <div className="experience-entry">
                                    <h4>Drupal Development Intern</h4>
                                    <p>Applied knowledge of progressive development strategies to contribute to architecture of Drupal and backend code solutions. Worked independently to utilize innovative systems analysis and design methodologies to complete assigned tasks.</p>
                                </div>
                                <div className="experience-entry">
                                    <h4>Junior Web Developer</h4>
                                    <p>Leveraged knowledge of scripting languages to write code in support of eCommerce web development projects. Acted as liaison between development team and client for gathering business and functional specifications and communicating project status reports and updates.</p>
                                </div>
                                <div className="experience-entry">
                                    <h4>Fast Food Crew member</h4>
                                    <p>Greeted customers and listened effectively to orders in order to ensure courteous and quick service. Prepared and served drinks and food in accordance with health codes and restaurant standards. Worked as a Junior JHSC member to ensure procedures were followed and improved.</p>
                                </div>
                                <h3>Education</h3>
                                <div className="experience-entry">
                                    <h4>Fanshawe College, London Ontario</h4>
                                    <h5>Advanced Diploma, Interactive Media Specialist</h5>
                                    <p>4/2020</p>
                                </div>
                                <div className="experience-entry">
                                    <h4>Fanshawe College, London Ontario</h4>
                                    <h5>Diploma, Interactive Media Design & Development</h5>
                                    <p>5/2018</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</div>);

export default resume;
