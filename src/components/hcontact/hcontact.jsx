import "./hcontact.css";

function Title({ subtitle, title }) {
  return (
    <section className="title">
      <p className="title-sub">{subtitle}</p>
      <h2 className="title-main">{title}</h2>
    </section>
  );
}

export default Title;
