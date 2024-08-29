import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Textile Engineering</h5>
            <p className="font-semibold">Textile engineering college</p>
            <p className="my-3">
              I am currently in my last year of studying Textile Engineering
              from Textile engineering college,Noakhali
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Certification</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Complete Web Development Course With Jhankar Mahbub
            </h5>
            <p className="font-semibold">Programming Hero</p>
            <p className="my-3">Batch 4</p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
