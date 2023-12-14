import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import Img4 from "../assets/img4.jpg";
import Img5 from "../assets/img5.jpg";
import Img6 from "../assets/img6.jpg";
import QueryForm from "../Forms/QueryForm";
const serviceData = [
  {
    id: 1,
    Img: Img1,
    title: "GST Registration",
    content:
      "Streamline taxation with our expert assistance. Ensure legal compliance, enhance credibility, and simplify the process for a seamless registration experience. Boost your business efficiency with our comprehensive GST Registration services.",
    queryForm: <QueryForm title="GST Registration" />,
    benefits: {
      title: "GST (Goods and Service Tax) - Overview",
      content: `
            The Goods and Services Tax (GST) is a type of tax on the consumption of goods and services in countries, collected by businesses from consumers and paid to the government.It was introduced officially in India on 1 July 2017, replacing the earlier system of multiple taxes, such as excise duty, service tax, and value-added tax (VAT).
            The 101st Constitutional Amendment / One Hundred and First Amendment Act, 2016 of the Constitution of India is a significant piece of legislation that has had a prominent impact on the Indian economy. It was passed in 2016 to introduce the Goods and Services Tax (GST), a value-added tax (VAT) that has simplified the tax system and boosted economic growth. This constitutional amendment was introduced as a nationwide Goods and Services Tax (GST) concept in India.
            GST registration is mandatory for all businesses with an annual turnover of more than ₹40 lakhs (₹ 20 lakhs for businesses in special category states).
            The Goods and Services Tax Network (GSTN) is a non-profit, non-government organisation that provides the shared IT infrastructure and services to the Central and State Governments, taxpayers and other stakeholders to implement the Goods and Services Tax (GST) in India.
The GSTN is responsible for developing and maintaining the GST portal, which is the online platform that taxpayers use to register for GST, file returns, and make payments.
            `,
      list: [],
    },
    howToRegister: {
      title: "What is GSTIN?",
      content: `
            GSTIN stands for Goods and Services Tax Identification Number. It is a unique 15-digit number assigned to every taxpayer registered under the GST regime in India. The GSTIN is used to identify taxpayers and to track their transactions.
            `,
      heading: "Steps For Company Registration Process in India",
      steps: [
        "The first two digits represent the state code.",
        "The next ten digits are the PAN card number of the taxpayer.",
        "The thirteenth digit is an entity code used to distinguish between different types of taxpayers.",
        "The fourteenth digit is a fixed alphabet 'Z'.",
        "The fifteenth digit is a check digit, which is used to verify the accuracy of the GSTIN.",
      ],
    },
  },
  {
    id: 2,
    Img: Img2,
    title: "Income Tax",
    content: " Navigate the complexities of income tax with our expert services. From filing returns to strategic tax planning, we ensure compliance and maximize your financial efficiency. Trust us for accurate, timely, and comprehensive income tax solutions tailored to your needs.",
    queryForm: <QueryForm title="GST Registration" />,
    benefits: {
        title: "Benefits of e-Filing of Income Tax Return",
        content: `
        E-filing your income tax return has several advantages that can simplify your financial life. Here's how it can help you:
        `,
        list: [
          " Avoid Tax Notices: When you e-file, you're less likely to make mistakes on your tax return that could trigger a notice from tax authorities.",
          "Build Financial Records: E-filing encourages you to keep good financial records, making it easier to manage your money.",
          "Carry Forward Losses: If you've had losses in the past, e-filing allows you to use them to lower your taxes in the future.",
          "Get Tax Refunds Faster: E-filing often means you get your tax refund faster, which can be a financial boost.",
          "Boost Credit Score: Keeping your tax record clean through e-filing can improve your credit score, making getting loans or credit cards more accessible.",
          "Simplify Business Finances: For businesses, e-filing can streamline the tax process, making it easier to meet your tax obligations.",
          "Plan Your Finances Better: E-filing makes you assess your financial situation every year, helping you make better financial plans for the future."
        ],
      },
      howToRegister: {
        title: "How to Register a Company?",
        content: `
          
        `,
        heading:"Who Should File an Income Tax Return?",
        steps: 
        [
            "Salaried individuals with gross income exceeding the exemption level before deductions under Sections 80C to 80U",
            "Regardless of profit or loss, every firm, whether private limited, LLP, or partnership, is required to file IT return",
            "Individuals who are Directors in a Private Limited Company or a Partner in a Limited Liability Partnership firm.",
            "Individuals and businesses seeking tax refunds",
            "NRIs and tech professionals ."
        ],
      },
  },
  {
    id: 3,
    Img: Img3,
    title: "MSME Registration",
    content: "MSME Registration. Our streamlined process ensures swift registration for Micro, Small, and Medium Enterprises. Gain access to government schemes, financial support, and a competitive edge. Let our expert services empower your business growth through hassle-free MSME registration, paving the way for enhanced recognition and opportunities in the market.",
    queryForm: <QueryForm title="MSME Registration" />,
    benefits: {
        title: "MSME Registration Form",
        content: `The 'MSME Registration Form' refers to the official document or online application used by Micro, Small, and Medium Enterprises (MSMEs) in India to apply for registration under the MSME category. This registration offers businesses recognition and access to various benefits and support provided by the government to promote their growth and development.
        When filling out the MSME Registration Form, key details and information must be provided. These typically include:
          
        `,
        list: [
          "Business Information: This includes the legal name of the business entity, its type (e.g., Proprietorship, Partnership, Private Limited, etc.), and the business's communication address.",
          "Type of Industry: Specify the main economic activity of the business, such as manufacturing, services, or trading.",
          "Investment in Plant & Machinery or Equipment: Indicate the total value of investment made in purchasing machinery, equipment, or assets used for business operations.",
          "Annual Turnover: Provide the business's annual turnover for the previous financial year. This is the total revenue generated by the business from its operations.",
          "Employment Details: Mention the number of people employed in the business, categorized by skilled and unskilled workers.",
          "Aadhaar Number: The Aadhaar number of the business owner or authorized signatory.",
          "PAN (Permanent Account Number): The PAN of the business entity.",
          "Bank Account Details: Provide the bank account number and IFSC code of the business's primary bank account.",
          "Contact Details: Share contact information, including email address and phone number.",
          "Social Category: Indicate whether the business belongs to a particular social category (SC/ST/OBC/General).",
          "Location of Business: Specify the business's physical location, including district and state.",
          "Date of Commencement: Mention the date the business started its operations."
        ],
      },
      howToRegister: {
        title: "",
        content: `
          
        `,
        heading:"Documents Required for MSME Registration",
        steps: 
        [
            "Address of the business",
            "Basic business activity",
            "NIC 2 digit code",
            "Investment details (Plant/equipment details)",
            "Turnover details (as per new MSME definition)",
            "Aadhar number",
            "PAN number",
           " Bank account number",
           " Partnership deed",
            "Sales and purchase bill copies",
            "Copies of licenses and bills of purchased machinery"
        ],
      },
  },
  {
    id: 4,
    Img: Img4,
    title: "Fssai (Food Licences)",
    content: "Ensure food safety compliance with FSSAI registration. Our expert services simplify the process, offering swift registration for Food Business Operators. From small-scale to large enterprises, gain credibility, legal compliance, and access to broader markets. Let us navigate the intricacies of FSSAI, ensuring your food business meets regulatory standards seamlessly.",
    queryForm: <QueryForm title="GST Registration" />,
  },
  {
    id: 5,
    Img: Img5,
    title: "Private Limited Company",
    content: `Elevate your business with a Private Limited Company. Enjoy limited liability,
     credibility, and growth potential. Our expert assistance ensures a smooth incorporation process, compliance with regulations, and strategic business structuring. Unlock the advantages of a Private Limited Company for enduring success and enhanced market presence.`,
    queryForm: <QueryForm title="Register Your Company" />,
    benefits: {
      title: "Benefits of Registering a Company",
      content: `
              There are numerous advantages to registering a company. 
              By doing so, you enhance the credibility of your business, 
              which can lead to increased consumer trust. Additionally, 
              company registration online can provide various benefits that 
              can help your business to grow and succeed.
            `,
      list: [
        "Shield from personal liability and protects from other risks and losses",
        "Attract more customers",
        "Procure bank credits and good investment from reliable investors with ease",
        "Offers liability protection to protect your company’s assets",
        "Greater capital contribution and greater stability",
        "Increases the potential to grow big and expand",
      ],
    },
    howToRegister: {
      title: "How to Register a Company?",
      content: `
              Registering a company in India has become incredibly convenient and accessible. 
              At Vakilsearch, we have simplified the process to ensure a seamless experience, 
              whether you want to register a private limited company or any other business structure. 
              You can gain comprehensive insights into the registration procedure with few essential steps. 
              The online registration system has made the entire process user-friendly and streamlined, 
              eliminating any hassles.
            `,
      heading: "Steps For Company Registration Process in India",
      steps: [
        "Gather the necessary documents and get them verified for the incorporation process.",
        "Apply for Digital Signature Certificate (DSC) and seek approval for your company name from MCA.",
        "Acquire the second set of required documents and ensure their verification.",
        "Prepare the Memorandum of Association (MOA) and Articles of Association (AOA) for your company.",
        "Upload the completed documents and forms for the final stage of company incorporation.",
      ],
    },
  },
  {
    id: 6,
    Img: Img6,
    title: "Farmer Producer Company (FPO Registration)",
    content: "Cultivate success with a Farmer Producer Company (FPC). Empower agricultural communities through collaborative farming ventures. Our expert services guide you in establishing an FPC, fostering collective strength, access to resources, and market opportunities. Join the agricultural revolution, promoting sustainable farming practices and ensuring prosperity for farming communities.",
    queryForm: <QueryForm title="Producer Company Registration" />,
    benefits: {
      title: "Benefits of FPO Registration",
      content: "There are many benefits to registering a Farmer Producer Organization (FPO), including:",
      list: [
        "Members of an FPO are not personally liable for the debts and liabilities of the organisation. This means that their personal assets are protected if the FPO goes bankrupt.",
        "FPOs are eligible for various government subsidies and grants, which can help them finance their operations and grow their business.",
        "Banks and financial institutions are more likely to lend money to FPOs than to individual farmers, as FPOs are seen as being more creditworthy. FPOs have a larger pool of assets and members and can negotiate better interest rates.",
        "FPOs can negotiate better prices for their produce with buyers because they can sell in bulk. This can lead to higher profits for FPO members.",
        "FPOs can help farmers improve their efficiency and productivity by providing access to better inputs, technology, and training.",
        "FPOs can help farmers to reach new markets and sell their produce at a higher price"
      ],
    },
    howToRegister: {
      title: "Producer Company Incorporation (FPO Registration) - An Overview",
      content: `
      Producer company registration is forming a producer company under the Companies Act of 2013. Producer companies are special types of businesses formed by farmers and other agricultural producers to help them market and sell their products more effectively. They have limited liability for their members, which means that the members are not personally responsible for the debts and liabilities of the company.
      `,
      heading:"Documents Required for Producer Company Registration",
      steps: 
      [
       " PAN card of all members and directors",
       "Aadhaar card of all members and directors",
      "Passport-size photographs of all members and directors",
      "Registered office address proof (such as electricity bill, gas bill, or rent agreement)",
      "Memorandum of Association (MoA)",
      "Articles of Association (AoA)",
    "Digital Signature Certificates (DSCs) of all directors",
     "No Objection Certificate (NOC) from the landlord of the registered office premises (if applicable)",
    "Copy of the Producer Certificate issued by the District Horticulture Officer (DHO) or any other competent authority (if applicable)",
    "Copy of the registration certificate of the producer organisation (if applicable)"
      ],
    },
  },
  {
    id: 7,
    Img: Img6,
    title: "IEC (Import & Export)",
    content: "Facilitate international trade with IEC registration. Our expert services streamline the Import and Export Code process, ensuring swift approval. Unlock global markets, enhance credibility, and comply with regulatory standards. Let us empower your business to navigate the complexities of cross-border trade seamlessly. Gain a competitive edge with our efficient IEC registration assistance.",
    queryForm: <QueryForm title="Ask the Experts" />,
    benefits: {
      title: "Benefits of IEC Code",
      content: `
      An Import Export Code (IEC) is a 10-digit code necessary for Indian import/export businesses. It's issued by the DGFT, Ministry of Commerce, and doesn't require filing or renewal. Importers need IEC to clear customs and make payments to foreign banks, while exporters need it to send shipments and receive payments.The IEC Number is essential for any importer/exporter operating in India.
      `,
      list: [
        "IEC facilitates global market access, enabling businesses to expand by introducing their products and services internationally.",
        "Companies can access various benefits for their imports/exports through DGFT, Export Promotion Council, Customs, etc., leveraging their IEC registration.",
        "IEC eliminates the need for filing returns. Once allocated, it maintains validity without necessitating any ongoing processes. Even export transactions are not obligated to submit returns to DGFT.",
        "Acquiring an IEC code from DGFT is straightforward, usually taking 10 to 15 days upon application submission. No evidence of export or import is required to obtain the Importer exporter code.",
        "An IEC code remains effective for the entirety of an entity's existence and doesn't require renewal. Once obtained, it serves as an entity across all import and export transactions."
      ],
    },
    howToRegister: {
      title: "How to Register for Import Export Code?",
      content: `
      The process for importer exporter code registration online in India is relatively simple and can be completed in a few steps. Here's how to register for an import export license online in India:
      `,
      heading:"",
      steps: 
      [
        "Visit the Directorate General of Foreign Trade (DGFT) website, which is the official website for IEC registration in India", 
        "If you are a new user, click on the ‘Register’ button and create a new account by providing your basic details such as name, email address, and phone number",
        "Once you have registered, log in to the DGFT website using your registered email ID and password",
        "Click on ‘ Online IEC Application ’ On the homepage of the DGFT website, which will redirect you to the import export code application form",
       " Fill in the online IEC application form with all the required details such as the name and address of the firm or individual, PAN number, bank account details, and contact information and the required documentation",
        "Pay the import export code application fee online through internet banking, debit card, or credit card",
         "Once you have filled in the application form, uploaded the necessary documents, and paid the application fee, review the application and click on the ‘Submit’ button",
        "After submitting the IEC application, you can track the status of your application online. Once the IEC is issued, you will receive an IEC certificate on your registered email ID."
      ],
    },
  },
  {
    id: 8,
    Img: Img6,
    title: "ISO Certifications",
    content: "Attain global standards and credibility with ISO Certifications. Our expert services streamline the certification process, ensuring compliance with international quality benchmarks. From ISO 9001 for quality management to ISO 14001 for environmental practices, let us guide your business towards excellence. Elevate your reputation, enhance customer trust, and open doors to new opportunities with our comprehensive ISO Certification assistance.",
    queryForm: <QueryForm title="ISO Certifications Registration" />,
  },
  {
    id: 9,
    Img: Img6,
    title: "PF Registration",
    content: "Ensure employee financial security with PF Registration. Our expert services simplify the Provident Fund registration process, guaranteeing compliance and fostering employee well-being. From seamless documentation to regulatory adherence, trust us to navigate the complexities, providing a solid foundation for your business and demonstrating your commitment to employee welfare.",
    queryForm: <QueryForm title="GST Registration" />,
  },
  {
    id: 10,
    Img: Img6,
    title: "ESI Registration",
    content: " Prioritize employee well-being with ESI Registration. Our expert services streamline the Employees' State Insurance registration process, ensuring compliance and comprehensive health coverage for employees. From documentation to regulatory adherence, entrust us to navigate complexities, fostering a healthy work environment and demonstrating your commitment to employee welfare.",
    queryForm: <QueryForm title="GST Registration" />,
  },
  {
    id: 11,
    Img: Img6,
    title: "Nidhi Company",
    content: "Foster community savings and financial stability with a Nidhi Company. Our expert services guide you through the seamless establishment of a Nidhi Company, promoting mutual benefit among members through regulated savings and lending practices. Enhance financial inclusivity, community trust, and sustainable growth with our comprehensive Nidhi Company registration assistance.",
    queryForm: <QueryForm title="GST Registration" />,
  },
  {
    id: 12,
    Img: Img6,
    title: "Partnership Firm",
    content: "Embrace collaboration and shared success with a Partnership Firm. Our expert services facilitate the smooth creation of a partnership, ensuring clarity in roles, responsibilities, and profit-sharing. From documentation to registration, trust us to establish a robust partnership structure that aligns with your business goals. Elevate your ventures through the strength of partnership with our comprehensive assistance.",
    queryForm: <QueryForm title="GST Registration" />,
  },
  {
    id: 13,
    Img: Img6,
    title: "Startup India Registration",
    content: "Ignite innovation and unlock benefits with Startup India Registration. Our expert services guide startups through a seamless registration process, unlocking government incentives, and fostering growth. From documentation to compliance, trust us to navigate the startup ecosystem, ensuring your venture thrives with recognition and support. Propel your startup journey with our comprehensive Startup India registration assistance.",
    queryForm: <QueryForm title="GST Registration" />,
  },
  {
    id: 14,
    Img: Img6,
    title: "Accounting & Book Keeping",
    content: "Optimize financial management with our Accounting & Bookkeeping Services. Our expert team ensures accurate and timely record-keeping, transparent financial reporting, and compliance with accounting standards. Streamline your financial processes, gain insights into your business, and make informed decisions with our comprehensive accounting and bookkeeping assistance.",
    queryForm: <QueryForm title="GST Registration" />,
  },
  {
    id: 15,
    Img: Img6,
    title: "GST Return Filling",
    content: "Ensure seamless compliance with GST Return Filing. Our expert services streamline the process, providing accurate and timely submission of returns. From documentation to reconciliation, trust us to navigate the complexities of Goods and Services Tax, ensuring your business meets regulatory standards effortlessly. Stay compliant and focus on your business growth with our efficient GST Return Filing assistance.",
    queryForm: <QueryForm title="GST Registration" />,
  },
  {
    id: 16,
    Img: Img6,
    title: "Limited Libility Partnership (LLP) ",
    content:
      "Limited Liability Partnership (LLP): A modern business structure blending partnership flexibility with limited liability. Partners enjoy protection from personal liability, shielding assets from business debts. Ideal for professional services, LLPs offer collaborative advantages with simplified operations, making it a strategic choice for businesses seeking flexibility and liability protection.",
    queryForm: <QueryForm title="Register Your Company" />,
    benefits: {
      title: "What Is Limited Liability Partnership?",
      content: `
            LLP is a popular type of partnership where limited liability Partners enjoy protection of personal assets from debts, liabilities & damages. An LLP is a corporate body and legal entity separate from its partners. It has perpetual succession in every state and is registered under the LLP Act, 2008

            LLP is a popular type of partnership where limited liability Partners enjoy protection of personal assets from debts, liabilities & damages. An LLP is a corporate body and legal entity separate from its partners. It has perpetual succession in every state and is registered under the LLP Act, 2008
            
            An LLP (Limited Liability Partnership) is a corporate business structure that offers its members the benefit of limited liability, just like a company. It allows partners to manage internal affairs based on mutually agreed-upon terms, similar to a partnership firm. Partners have reduced liabilities for any future debts incurred in the course of running the business.
            
            An LLP combines features of both a corporate structure and a partnership firm, making it a hybrid entity that provides the best of both worlds. Partners are required to contribute to the LLP as specified in the LLP Agreement, and their contributions can take various forms, such as tangible or intangible assets, movable or immovable property, money, and cash.
            
            In an LLP, the Company itself is liable for any losses or debts incurred in business operations, which means individual members of the LLP are not personally responsible for such financial obligations.
            In an LLP, the Company itself is liable for any losses or debts incurred in business operations, which means individual members of the LLP are not personally responsible for such financial obligations.
            `,
      subtitle: "Pre-requisites for Incorporating an LLP",
      list: [
        "Minimum two partners allowed (Individual or body corporate)",
        "At least two designated partners are required, with one being an Indian resident",
        " A digital signature certificate needed",
        "Mandatory to have an LLP name",
        "An LLP agreement is essential",
        " A registered office must be established.",
      ],
    },
    howToRegister: {
      heading: "Advantages of Limited Liability Partnership",
      steps: [
        "Limited liability: The partners of an LLP are not personally liable for the debts and liabilities of the LLP. This means that their assets are protected if the LLP becomes insolvent.",
        "Pass-through taxation: LLPs are taxed as pass-through entities, which means that the income of the LLP is taxed directly in the hands of the partners. This avoids double taxation when companies distribute their profits to shareholders.",
        "Flexibility: LLPs are relatively flexible regarding their management structure and ownership. The partners can agree on any management structure they choose, and there are no restrictions on transferring ownership interests.",
      ],
    },
  },
  {
    id: 17,
    Img: Img6,
    title: "One Person Company",
    content:
      "As per the Companies Act, 2013 an One Person Company (OPC) is an unique entity where an individual can form a company. It combines the concept of a company with limited liability and succession, allowing a person to own and operate a company in their name.",
    queryForm: <QueryForm title="GST Registration" />,
  },
  {
    id: 18,
    Img: Img6,
    title: "Sole Propreietorship",
    content: "Embrace entrepreneurial independence with a Sole Proprietorship. Our expert services guide you through the seamless establishment of a sole proprietorship, ensuring simplicity in ownership and operations. From registration to compliance, trust us to create a robust foundation for your business journey. Enjoy full control, quick decision-making, and streamlined processes with our comprehensive Sole Proprietorship registration assistance.",
    queryForm: <QueryForm title="GST Registration" />,
  },
  {
    id: 19,
    Img: Img6,
    title: "Digital Signature Certificates",
    content: "Enhance security and streamline document authentication with Digital Signature Certificates (DSC). Our expert services facilitate the issuance and implementation of DSCs, ensuring a secure and legally recognized digital signature for your online transactions and communications. From application to integration, trust us to navigate the intricacies, providing a robust solution for your digital security needs. Elevate your online presence with our comprehensive Digital Signature Certificates assistance.",
    queryForm: <QueryForm title="GST Registration" />,
  },
  {
    id: 20,
    Img: Img6,
    title: "Shop & Establishment Registration",
    content: "Establish legal compliance and a conducive work environment with Shop & Establishment Registration. Our expert services streamline the registration process, ensuring adherence to labor laws. From documentation to regulatory compliance, trust us to navigate the complexities, providing a solid foundation for your business and demonstrating your commitment to employee welfare. Secure a compliant and efficient workplace with our comprehensive Shop & Establishment Registration assistance.",
    queryForm: <QueryForm title="GST Registration" />,
  },
  {
    id: 21,
    Img: Img6,
    title: "Labour Registration",
    content: "Prioritize workforce welfare with Labour Registration. Our expert services streamline the registration process, ensuring compliance with labor laws and regulations. From documentation to regulatory adherence, trust us to navigate the complexities, fostering a harmonious employer-employee relationship and demonstrating your commitment to ethical labor practices. Ensure a compliant and conducive work environment with our efficient Labour Registration assistance.",
    queryForm: <QueryForm title="GST Registration" />,
  },
  {
    id: 22,
    Img: Img6,
    title: "Trademark Registration",
    content: "Safeguard your brand identity with Trademark Registration. Our expert services guide you through the process, ensuring legal protection for your business name, logo, and distinctive assets. From application to approval, trust us to navigate the complexities, securing your brand recognition and fostering trust among consumers. Elevate your brand with our comprehensive Trademark Registration assistance.",
    queryForm: <QueryForm title="GST Registration" />,
  },
  {
    id: 23,
    Img: Img6,
    title: "Copy Right Registration",
    content: "Safeguard your creative works with Copyright Registration. Our expert services guide you through the process, ensuring legal protection for your artistic, literary, or musical creations. From application to approval, trust us to navigate the complexities, securing your intellectual property and providing you with exclusive rights. Elevate your creative endeavors with our comprehensive Copyright Registration assistance.",
    queryForm: <QueryForm title="GST Registration" />,
  },
  {
    id: 24,
    Img: Img6,
    title: "Patent",
    content: "Secure your innovations with Patent Registration. Our expert services guide you through the process, ensuring legal protection for your inventions, technologies, and unique ideas. From application to approval, trust us to navigate the complexities, safeguarding your intellectual property and providing you with exclusive rights. Propel your innovative endeavors with our comprehensive Patent Registration assistance.",
    queryForm: <QueryForm title="GST Registration" />,
  },
  {
    id: 25,
    Img: Img6,
    title: "Static / Dynamic Website",
    content: "Elevate your online presence with our expert Static and Dynamic Website Development services. A static website offers simplicity and quick loading times, ideal for showcasing information. Meanwhile, a dynamic website allows interactive features, enhancing user engagement. Trust us to tailor a website that aligns with your business goals, ensuring a seamless online experience for your visitors. Explore the best of both worlds with our comprehensive Static/Dynamic Website Development solutions.",
    queryForm: <QueryForm title="GST Registration" />,
  },
  
  {
    id: 27,
    Img: Img6,
    title: "E-commerce Website",
    content: "Ignite online success with our E-commerce Website Development services. We craft robust and user-friendly e-commerce platforms tailored to your business needs. From seamless navigation to secure transactions, our expert team ensures a comprehensive solution. Elevate your online store, reach a wider audience, and optimize customer experiences with our end-to-end E-commerce Website Development assistance. Turn your business into a digital marketplace with our expertise.",
    queryForm: <QueryForm title="GST Registration" />,
  },
  {
    id: 28,
    Img: Img6,
    title: "Section-8",
    content: "Empower social change with our NGO Section 8 Registration services. We guide you through the seamless process of establishing a non-profit organization, registered under Section 8 of the Companies Act. Ensure legal compliance, unlock funding opportunities, and make a lasting impact on society. Trust us to navigate the complexities, providing comprehensive assistance for your NGO Section 8 Registration. Propel your philanthropic endeavors with our expert guidance.",
    queryForm: <QueryForm title="GST Registration" />,
    benefits: {
      title: "Benefits of Section 8 Company Compliance",
      content: `
      Compliance as a Section 8 company in India comes with several benefits. Being a non-profit entity,
       these organizations enjoy certain privileges and advantages due to their commitment to promoting 
       charitable, educational, scientific, or social welfare objectives. Here are some of the benefits
       of Section 8 company compliance:
            `,
      list: [
        " One of the significant benefits of compliance is the eligibility for various tax exemptions. Section 8 companies are exempt from paying income tax on their surplus income, provided the funds are used exclusively for the promotion of their objectives. Additionally, they can also enjoy exemptions on certain other taxes, such as property tax and stamp duty.",
        "Unlike other types of companies, a Section 8 company doesn't have a minimum capital requirement. This allows organizations to start their operations without the need for a substantial initial investment.",
        "The liability of the members of a Section 8 company is limited to the amount they have contributed towards the company's objectives. This feature protects the personal assets of the members in case of any liabilities or debts incurred by the organization.",
       "Section 8 companies enjoy perpetual existence, meaning their existence is not affected by the status of their members. They can continue to exist and function even if their founding members resign or pass away.",
       " Being registered under the Companies Act and operating as a non-profit entity, Section 8 companies often enjoy higher credibility and trust among donors, supporters, and the public at large. This can facilitate fundraising efforts and attract more resources for the organization's activities.",
       "Section 8 companies are eligible to receive foreign contributions under the Foreign Contribution Regulation Act (FCRA). This allows them to access funding and support from international donors and organizations for their charitable activities.",
       "Compliance as a Section 8 company provides official recognition and legal status to the organization. This recognition can be valuable when dealing with government authorities, other institutions, and the public.",
      " Section 8 companies may receive certain special privileges, such as reduced fees for various registrations and compliances.",
      "Unlike other types of companies, a Section 8 company doesn't require the issuance of shares. This can simplify the organizational structure and management.",
      "By adhering to compliance requirements, Section 8 companies can focus on their core objectives and make a significant impact on society through their charitable, educational, scientific, or social welfare initiatives."


       
      ],
    },
    howToRegister: {
      title: "",
      content: `
            `,
      heading: "Documents Required for Annual Compliances of Section 8 Company",
      steps: [
       " Financial statements (balance sheet, profit & loss account, cash flow statement)",
        "Director's report",
        "Annual return (Form MGT-7)",
        "Auditor's report",
        "Income tax return (Form ITR-7)",
        "Statement of donations received",
        "Register of members",
        "Debenture holders",
        "Register of directors",
       " Key managerial personnel",
        "Minutes of Annual General Meeting (AGM) and Board Meetings."
      ],
    },
  },
  {
    id: 29,
    Img: Img6,
    title: "Society Registration",
    content: "Foster community initiatives with Society Registration. Our expert services guide you through the seamless registration process, ensuring legal compliance and credibility for your social organization. From documentation to regulatory adherence, trust us to navigate the intricacies, providing comprehensive assistance for your Society Registration. Empower your societal endeavors with a robust legal framework, fostering positive change and community development.",
    queryForm: <QueryForm title="GST Registration" />,
  },
  {
    id: 30,
    Img: Img6,
    title: "Trust Registration",
    content: "Establish a foundation for philanthropy and social impact with Trust Registration. Our expert services guide you through the seamless registration process, ensuring legal compliance and credibility. From documentation to regulatory adherence, trust us to navigate the complexities, providing comprehensive assistance for your Trust Registration. Empower your charitable endeavors with a solid legal framework and make a positive difference in the community.",
    queryForm: <QueryForm title="GST Registration" />,
  },
  {
    id: 31,
    Img: Img6,
    title: "CSR-1 Filling",
    content: "Ensure transparent corporate social responsibility with CSR-1 Filing. Our expert services guide you through the filing process, ensuring compliance with regulatory mandates. From documentation to submission, trust us to navigate the intricacies, facilitating your organization's commitment to social impact. Enhance your CSR initiatives with our comprehensive CSR-1 Filing assistance, contributing to a sustainable and responsible business ethos.",
    queryForm: <QueryForm title="GST Registration" />,
  },
  {
    id: 32,
    Img: Img6,
    title: "Sec. 80G & 12A Registration",
    content: "Maximize your organization's impact with Sec. 80G & 12A Registration. Our expert services streamline the registration process, ensuring eligibility for tax exemptions and charitable status. Gain credibility, encourage donor contributions, and contribute to social causes with confidence. Trust us to navigate the complexities, providing comprehensive assistance for your Sec. 80G & 12A Registration. Empower your organization to make a lasting difference with our expert guidance.",
    queryForm: <QueryForm title="GST Registration" />,
  },
  {
    id: 33,
    Img: Img6,
    title: "Niti Aayog Registration",
    content: "Propel your organization's social impact with Niti Aayog Registration. Our expert services facilitate the registration process, ensuring compliance with regulatory requirements. Gain recognition, access government initiatives, and contribute to national development. Trust us to navigate the intricacies, providing comprehensive assistance for your Niti Aayog Registration. Empower your organization to make a positive difference with our expert guidance.",
    queryForm: <QueryForm title="GST Registration" />,
  },
];

export default serviceData;
