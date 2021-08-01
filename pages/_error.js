import tw from "twin.macro";
import Layout from "../components/Layout";
import Container from "../components/Container";
import PushContent from "../components/navbar/PushContent";
import ButtonLink from "../components/ButtonLink";

const StyledContainer = tw(
  Container
)`flex flex-col items-center justify-center flex-1`;

export default function ErrorPage() {
  return (
    <Layout title="Error">
      <div tw="bg-yellow-200 flex-1 flex">
        <PushContent />
        <StyledContainer>
          <h2 tw="text-3xl text-black font-semibold text-opacity-60 mb-5 text-center">
            Something Went Wrong
          </h2>
          <p tw="text-black text-opacity-70 mb-5 text-center">
            Please try again later.
          </p>
          <ButtonLink href="/" primary>
            Return to Home
          </ButtonLink>
        </StyledContainer>
      </div>
    </Layout>
  );
}
