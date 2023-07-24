// ResearchPapers.js

const researchPapers = [
  {
    id: 1,
    title: "The daily star",
    author: "Author 1",
    link: "https://www.thedailystar.net/",
  },
  {
    id: 2,
    title: "the daily campus",
    author: "Author 2",
    link: "https://thedailycampus.com/",
  },
];

const ResearchPapers = () => {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Recommended Research Papers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {researchPapers.map((paper) => (
          <div key={paper.id} className="border rounded-lg p-4">
            <h2 className="text-lg font-bold mb-2">{paper.title}</h2>
            <p className="text-sm mb-4">Author: {paper.author}</p>
            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... text-white px-4 py-2 rounded-md  font-bold text-center"
            >
              Read Paper
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPapers;
