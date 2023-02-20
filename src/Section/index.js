import "./style.css";

const Section = ({title, body, extraHeaderContent}) => (
    <section className="section__tasksList flex__item">
            <ul className="tasksList">
                <li className="tasksList__item tasksList__header">{title}</li>
                {extraHeaderContent}
            </ul>
           {body}
        </section>
);

export default Section;