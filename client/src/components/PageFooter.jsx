export default function PageFooter() {
    return (
      <>
        <footer className="bg-[#F2F2F2] pt-8 pb-8 ">
          <div className="box2 flex justify-between items-center">
            <div className="text-[#999999]">
              <a className="mr-3 font-bold" href="">
                About
              </a>
              <a className="mr-3 font-bold" href="https://github.com/jsbin">
                Github
              </a>
              <a className="mr-3 font-bold" href="https://twitter.com/js_bin">
                Twitter
              </a>
              <a
                className="mr-3 font-bold"
                href="https://www.youtube.com/playlist?list=PLXmT1r4krsTooRDWOrIu23P3SEZ3luIUq"
              >
                Youtube
              </a>
              <a
                className="mr-3 font-bold"
                href="https://opencollective.com/jsbin/contribute"
              >
                Donate
              </a>
            </div>
            <div className="text-xs text-red-500 italic">
              Hack.Learn.Fix.Teach
            </div>
          </div>
        </footer>
      </>
    );
  }
  