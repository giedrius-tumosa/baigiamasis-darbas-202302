import HeaderNoUser from "../header/HeaderNoUser";
import QuestionList from "../questions/QuestionsList";
import Filter from "../filter/Filter";

const HomeNoUser = () => {
  return (
    <>
      <HeaderNoUser />
      <aside className="aside">
        <Filter />
      </aside>
      <main className="main">
        <QuestionList />
      </main>
      {/* //TODO: do i need footer */}
    </>
  );
};

export default HomeNoUser;
