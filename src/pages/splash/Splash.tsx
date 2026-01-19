import { Button } from '../../components/ui/button/Button';

const Splash = () => {
  return (
    <div className="container">
      <section className="jumbotron">
        <h1 className="font-rokkitt">Budgetier</h1>
        <p>A home grown budgeting app</p>
          <Button
            variant="default"
            size="lg"
          >
            Let's Get Started
          </Button>
          <Button
            variant="secondary"
            size="sm"
          >
            Already a user? Log in
          </Button>
          <Button
            variant="outline"
            size="default"
          >
            Outline
          </Button>
          <Button
            variant="destructive"
            size="icon"
          >
            Icon
          </Button>
          <Button
            variant="ghost"
            size="icon"
          >
            Ghost
          </Button>
          <Button
            variant="link"
            size="icon"
          >
            Link
          </Button>
      </section>
      <section>
        <h2 className="font-rokkitt">
          What will you accompish with Budgetier?
        </h2>
        <p>I want to...</p>
        <div className="goals-list"></div>
      </section>
    </div>
  );
};

export default Splash;
