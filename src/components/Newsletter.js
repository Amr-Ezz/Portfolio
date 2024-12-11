import { Col, Row } from "react-bootstrap";
import "./Newsletter.css";
import udemy from "../assets/udemy-3.svg";

const Newsletter = ({ onValidated, status, message }) => {
  // const [email, setEmail] = useState("");
  // useEffect(() => {
  //   if (status === "success") clearFields();
  // }, [status]);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   email &&
  //     email.indexOf("@") > -1 &&
  //     onValidated({
  //       EMAIL: email,
  //     });
  // };
  // const clearFields = () => {
  //   setEmail("");
  // };
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Courses</h3>

            <img src={udemy} alt="Udemy-logo" />
          </Col>
          <Col md={6} xl={7}>
            <ul>
              <li>Udemy - Advanced CSS and Sass Flexbox, Grid, Animations</li>
              <li>
                Udemy - React - The Complete Guide (incl Hooks, React Router,
                Redux)
              </li>
              <li>Udemy - The Complete 2020 Web Development Bootcamp</li>
              <li>
                Udemy - The Complete JavaScript Course 2020 Build Real Projects
              </li>
              <li>
                WordPress Academy: Learn WordPress step by step - Chris Dixon,
                Web Developer & Online Teacher
              </li>
            </ul>
            {/* <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <button type="submit">Submit</button>
              </div>
            </form> */}
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Newsletter;

/* Udemy - Advanced CSS and Sass Flexbox, Grid,
Animations
Udemy - React - The Complete Guide (incl Hooks, React
Router, Redux)
Udemy - The Complete 2020 Web Development
Bootcamp
Udemy - The Complete JavaScript Course 2020 Build
Real Projects
WordPress Academy: Learn WordPress step by step -
Chris Dixon, Web Developer & Online Teacher*/
