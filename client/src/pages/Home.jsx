import Button from "../components/common/Button";
import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";

function Home() {
  return (
    <Container>
      <div className="py-20">
        <SectionTitle
          title="Welcome to Happy Bites"
          subtitle="Fresh food for you and your pets."
        />

        <div className="flex justify-center">
          <Button>Order Now</Button>
        </div>
      </div>
    </Container>
  );
}

export default Home;