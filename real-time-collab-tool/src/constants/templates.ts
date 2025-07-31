export const templates = [
    {
      id: "blank",
      label: "Blank Document",
      imageUrl: "/blank-document.svg",
      initialContent: "",
    },
    {
      id: "software-proposal",
      label: "Software development proposal",
      imageUrl: "/software-proposal.svg",
      initialContent: `
        <h1>Software Development Proposal</h1>
        <p><strong>Client:</strong> [Client Name]</p>
        <p><strong>Prepared by:</strong> [Your Company]</p>
        <h2>Overview</h2>
        <p>This proposal outlines a plan for developing a software solution tailored to meet your needs.</p>
        <h2>Goals</h2>
        <ul>
          <li>Deliver a scalable and secure application</li>
          <li>Meet project milestones on time</li>
          <li>Ensure user-friendly experience</li>
        </ul>
        <h2>Timeline</h2>
        <p>Phase 1: Discovery - 2 weeks<br/>Phase 2: Development - 4 weeks<br/>Phase 3: Testing - 2 weeks</p>
        <h2>Cost Estimate</h2>
        <p>Total Cost: $[amount]</p>
      `,
    },
    {
      id: "project-proposal",
      label: "Project proposal",
      imageUrl: "/project-proposal.svg",
      initialContent: `
        <h1>Project Proposal</h1>
        <p><strong>Project Name:</strong> [Project Title]</p>
        <p><strong>Submitted by:</strong> [Your Name or Company]</p>
        <h2>Introduction</h2>
        <p>This project aims to [insert objective].</p>
        <h2>Scope</h2>
        <p>The scope of this project includes [brief description].</p>
        <h2>Deliverables</h2>
        <ul>
          <li>Deliverable 1</li>
          <li>Deliverable 2</li>
        </ul>
        <h2>Budget</h2>
        <p>Estimated Budget: $[amount]</p>
      `,
    },
    {
      id: "business-letter",
      label: "Business letter",
      imageUrl: "/business-letter.svg",
      initialContent: `
        <p>[Your Name]</p>
        <p>[Your Company]</p>
        <p>[Address]</p>
        <p>[Email] | [Phone]</p>
        <br />
        <p>[Date]</p>
        <br />
        <p>[Recipient Name]</p>
        <p>[Recipient Company]</p>
        <p>[Address]</p>
        <br />
        <p>Dear [Recipient Name],</p>
        <p>I am writing to formally address [subject of the letter].</p>
        <p>[Body content]</p>
        <p>Thank you for your time and consideration.</p>
        <br />
        <p>Sincerely,</p>
        <p>[Your Name]</p>
      `,
    },
    {
      id: "resume",
      label: "Resume",
      imageUrl: "/resume.svg",
      initialContent: `
        <h1>[Your Name]</h1>
        <p>[Email] | [Phone] | [LinkedIn]</p>
        <h2>Professional Summary</h2>
        <p>Motivated and detail-oriented professional with [X] years of experience in [industry].</p>
        <h2>Skills</h2>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
        </ul>
        <h2>Work Experience</h2>
        <p><strong>[Job Title]</strong> — [Company Name]</p>
        <p>[Month, Year] - [Month, Year]</p>
        <ul>
          <li>Achievement or responsibility</li>
        </ul>
        <h2>Education</h2>
        <p><strong>[Degree]</strong> — [University Name]</p>
      `,
    },
    {
      id: "cover-letter",
      label: "Cover letter",
      imageUrl: "/cover-letter.svg",
      initialContent: `
        <p>[Your Name]</p>
        <p>[Your Address]</p>
        <p>[City, State ZIP]</p>
        <p>[Email] | [Phone]</p>
        <br />
        <p>[Date]</p>
        <br />
        <p>[Hiring Manager Name]</p>
        <p>[Company Name]</p>
        <p>[Company Address]</p>
        <br />
        <p>Dear [Hiring Manager Name],</p>
        <p>I am excited to apply for the [Job Title] position at [Company Name]. With a background in [relevant experience], I am confident in my ability to contribute significantly to your team.</p>
        <p>[Body of the letter]</p>
        <p>Thank you for considering my application. I look forward to the opportunity to discuss how I can benefit your organization.</p>
        <br />
        <p>Sincerely,</p>
        <p>[Your Name]</p>
      `,
    },
    {
      id: "letter",
      label: "Letter",
      imageUrl: "/letter.svg",
      initialContent: `
        <p>[Your Name]</p>
        <p>[Your Address]</p>
        <p>[City, State ZIP]</p>
        <br />
        <p>[Date]</p>
        <br />
        <p>[Recipient Name]</p>
        <p>[Recipient Address]</p>
        <p>[City, State ZIP]</p>
        <br />
        <p>Dear [Recipient Name],</p>
        <p>I hope this letter finds you well. I wanted to take a moment to [reason for writing].</p>
        <p>[Body of the letter]</p>
        <p>Looking forward to hearing from you soon.</p>
        <br />
        <p>Best regards,</p>
        <p>[Your Name]</p>
      `,
    },
  ];
  