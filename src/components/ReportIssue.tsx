import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

interface IssueForm {
  issueType: string;
  description: string;
  contact: string;
}

const ReportIssue = () => {
  const { register, handleSubmit, reset } = useForm<IssueForm>();

  const onSubmit = (data: IssueForm) => {
    const templateParams = {
      issue_type: data.issueType,
      description: data.description,
      contact: data.contact,
    };

    emailjs
      .send(
        "service_7w169fd",
        "template_hp1xmpb",
        templateParams,
        "OqA3tAOLpcNrLd8Rc",
      )
      .then(() => {
        alert("Issue submitted successfully!");
        reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send report. Try again.");
      });
  };

  return (
    <section id='report-issue' className="py-24 bg-[#F4EFE9] px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-12 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gradient opacity-10 rounded-bl-full" />

        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif mb-4  text-[#F54900] font-bold">
            Report an Issue
          </h2>
          <p className="text-gray-500">
            Something didn’t go well? Kindly let us know.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-2">
                What happened?
              </label>
              <select
                {...register("issueType")}
                className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-orange outline-none"
              >
                <option>Wrong or missing items</option>
                <option>Late delivery</option>
                <option>Problems with a chef</option>
                <option>App or payment issues</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                Contact Details
              </label>
              <input
                {...register("contact")}
                placeholder="Email or Phone Number"
                className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-orange outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Tell us more</label>
            <textarea
              {...register("description")}
              rows={4}
              placeholder="Describe the issue in detail..."
              className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-orange outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F54900] text-white py-5 rounded-2xl font-bold text-lg hover:bg-gray-900 transition-colors shadow-lg"
          >
            Submit Report
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReportIssue;
