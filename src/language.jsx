import { languages } from "./languages";

export default function Language({ count }) {
  const language_box = languages.map((item, index) => {
    const isLang = index < count;

    const styles = {
      backgroundColor: item.backgroundColor,
      color: item.color,
      padding: "8px",
      margin: "1px",
      borderRadius: "4px",
      textAlign: "center",
      fontWeight: "bold",
    };

    return (
      <div
        className={isLang ? "lost" : "lang-box"}
        key={index}
        style={styles}
      >
        {item.name}
      </div>
    );
  });

  return <>{language_box}</>;
}
