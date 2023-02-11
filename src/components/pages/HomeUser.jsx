import QuestionList from "../questions/QuestionsList";
import Filter from "../filter/Filter";
import HeaderUser from "../header/HeaderUser";

const HomeUser = () => {
  return (
    <>
      <HeaderUser />
      <aside className="aside">
        <Filter />
      </aside>
      <main className="main">
        <QuestionList />
      </main>
    </>
  );
};

export default HomeUser;
