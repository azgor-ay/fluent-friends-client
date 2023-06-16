import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const DashboardWelcome = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  return (
    <div>
      {!isAdmin && !isInstructor && (
        <div>
          <h1 className="dash-welcome-heading text-5xl">
            🌟 Welcome to <span className="text-primary">Fluent</span> Friends
            🌟
          </h1>
          <p className="px-24 text-xl text-center text-accent">
            Unlock your language potential with personalized courses and
            interactive practice. Embark on an exciting journey to become a
            confident communicator.
          </p>
        </div>
      )}

      {isAdmin && (
        <div>
          <h1 className="dash-welcome-heading text-3xl">
            🌟 WELCOME TO <span className="text-primary">FLUENT</span> FRIENDS
            ADMIN PANEL 🌟
          </h1>

          <p className="px-24 text-xl text-center text-accent">
            Unlock your potential as an Admin and wield the power to shape the
            Fluent Friends platform. With your expertise and guidance, you have
            the opportunity to create an exceptional learning environment for
            our users. Get ready to make a lasting impact and empower learners
            worldwide!
          </p>
        </div>
      )}
      {isInstructor && (
        <div>
          <h1 className="dash-welcome-heading text-5xl leading-normal">
            🌟 WELCOME TO <span className="text-primary">FLUENT</span> FRIENDS
            🌟 <br />
            🌟 INSTRUCTOR DASHBOARD 🌟
          </h1>

          <p className="px-24 text-xl text-center text-accent">
            Welcome, esteemed Instructor, to the Fluent Friends community!
            Prepare to embark on an exciting journey where you can inspire and
            nurture learners in their language development. Your expertise and
            passion will ignite the minds of our users, fostering a community of
            confident and skilled communicators. Get ready to make a difference,
            one lesson at a time!
          </p>
        </div>
      )}
    </div>
  );
};

export default DashboardWelcome;
