const LeftContents = () => {
  return (
    <div className="border-1 w-1/2 space-y-10">
      {/* Title with Description */}
      <div className="space-y-5">
        <small className="text-accent uppercase font-paragraph">
          Lorem ipsum dolor{' '}
        </small>
        <h1 className="font-title text-title-primary text-primary">
          Game-changing infrastructure
        </h1>
        <p className="w-128 text-primary-darker">
          A decentralised, non-custodial social graph, empowering players to
          take full ownership of their gaming identities and enabling developers
          to build next-gen applications.{' '}
        </p>
      </div>

      {/* CTA button */}
      <button className="btn">Join Discord</button>
    </div>
  );
};
export default LeftContents;
