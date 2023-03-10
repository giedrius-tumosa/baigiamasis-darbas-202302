import QuestionList from "../questions/QuestionsList";
import Filter from "../filter/Filter";
import HeaderUser from "../header/HeaderUser";

const HomeUser = () => {
  return (
    <>
      <HeaderUser />
      <div className="contentWrap_global">
        <aside className="aside">
          <Filter />
        </aside>
        <main className="main">
          <QuestionList />
        </main>
      </div>
    </>
  );
};

export default HomeUser;
