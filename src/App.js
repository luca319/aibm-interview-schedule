import React, { useState } from "react";

const interviews = [
  // Your interview data here
  // August 5, 2024 (Real Data)
  {
    date: "2024-08-05",
    schedule: 1,
    title: "Kickoff Meeting",
    time: "10:00 - 11:00",
    interviewer: "Mr.Nakao and all audit members",
    interviewee: "MD and all div/dept heads",
    isOnline: true,
    teamsLink:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_OGVhZjM5MDgtMTdiZi00YjM2LTlmNGItNTNlOGFmYTUzNzhi%40thread.v2/0?context=%7b%22Tid%22%3a%222f5fc54c-f978-4bcb-afe9-a826a312c217%22%2c%22Oid%22%3a%225bd15d04-7da2-4f8e-926b-27eeb9184194%22%7d,
  },
  {
    date: "2024-08-05",
    schedule: 1,
    title: "Meeting w/ MD - Corporate Governance & Operational",
    time: "11:00 - 12:00",
    interviewer: "AFSMAD: Mr. Inoue, Ms. Kayli, Mr. Koyama",
    interviewee: "Mr. Chen Heng Guan - Managing Director",
    isOnline: true,
    teamsLink:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_NDg1OTBlOWEtNTczNy00YjQ0LWEzMTctMmYyM2U5OWQ5MDUz%40thread.v2/0?context=%7b%22Tid%22%3a%2221106e7a-134b-4466-9555-3543978c7550%22%2c%22Oid%22%3a%227b4fc21e-8713-4ac5-bcfd-faaa43d02a4d%22%7d",
  },
  {
    date: "2024-08-05",
    schedule: 4,
    title: "Meeting w/ IT Unit",
    time: "14:00 - 15:00",
    interviewer: "AFSMAD: Mr. Koyama",
    interviewee: "Mr. Loo Teik Yong (M)",
    isOnline: true,
    teamsLink:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ODVmMmY2ODMtYmU5Ny00MTUzLTgwNzAtNDdmMjJiOWU5OGY4%40thread.v2/0?context=%7b%22Tid%22%3a%222f5fc54c-f978-4bcb-afe9-a826a312c217%22%2c%22Oid%22%3a%22c8284029-53ea-4031-9755-df465a231e71%22%7d",
  },
  {
    date: "2024-08-05",
    schedule: 1,
    title: "Meeting w/ HR & Admin Section",
    time: "15:00 - 16:00",
    interviewer: "AFSMAD: Mr. Aaron",
    interviewee: "Ms. Kartini Ismail (M)",
    isOnline: true,
    teamsLink:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZjlkYzlkMDctNDJkYi00Y2IxLTllYjctYjRjMGQ1N2I3OWU0%40thread.v2/0?context=%7b%22Tid%22%3a%2221106e7a-134b-4466-9555-3543978c7550%22%2c%22Oid%22%3a%22",
  },
  {
    date: "2024-08-05",
    schedule: 2,
    title: "Meeting w/ Product Development section",
    time: "15:00 - 16:00",
    interviewer: "AFSMAD: Ms. Kayli",
    interviewee: "Mr. Chan Chee Wei (AGM)",
    isOnline: true,
    teamsLink:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZDdhNDMxODAtM2M0Ni00NTViLWI1ZDAtMDgzMDM4N2ZjMjY0%40thread.v2/0?context=%7b%22Tid%22%3a%2221106e7a-134b-4466-9555-3543978c7550%22%2c%22Oid%22%3a%22b253f2f1-a78d-4903-8a92-3f98323ebc5d%22%7d",
  },
  // August 6, 2024 (Real Data)
  {
    date: "2024-08-06",
    schedule: 1,
    title: "Meeting w/ Sales Development Unit",
    time: "10:00 - 11:00",
    interviewer: "AFSMAD: Ms. Kayli",
    interviewee: "Ms. Shelly Tan (M)",
    isOnline: true,
    teamsLink:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZDdhNDMxODAtM2M0Ni00NTViLWI1ZDAtMDgzMDM4N2ZjMjY0%40thread.v2/0?context=%7b%22Tid%22%3a%2221106e7a-134b-4466-9555-3543978c7550%22%2c%22Oid%22%3a%22b253f2f1-a78d-4903-8a92-3f98323ebc5d%22%7d",
  },
  {
    date: "2024-08-06",
    schedule: 3,
    title: "Meeting w/ Legal & Compliance Unit",
    time: "10:00 - 11:00",
    interviewer: "AFSMAD: Mr. Inoue, ACSM: Ms. Fara, Ms. Chandni",
    interviewee: "Ms. Natasha Hakim (AM)",
    isOnline: true,
    teamsLink:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_NDg1OTBlOWEtNTczNy00YjQ0LWEzMTctMmYyM2U5OWQ5MDUz%40thread.v2/0?context=%7b%22Tid%22%3a%2221106e7a-134b-4466-9555-3543978c7550%22%2c%22Oid%22%3a%227b4fc21e-8713-4ac5-bcfd-faaa43d02a4d%22%7d",
  },
  {
    date: "2024-08-06",
    schedule: 1,
    title: "Meeting w/ Finance Section",
    time: "15:00 - 16:00",
    interviewer: "AFSMAD: Mr. Aaron, Kayli",
    interviewee: "Ms. Seline Lai  (SM)",
    isOnline: true,
    teamsLink:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZjlkYzlkMDctNDJkYi00Y2IxLTllYjctYjRjMGQ1N2I3OWU0%40thread.v2/0?context=%7b%22Tid%22%3a%2221106e7a-134b-4466-9555-3543978c7550%22%2c%22Oid%22%3a%2290f5645c-65fd-4541-b320-ba0814d02249%22%7d",
  },
  {
    date: "2024-08-06",
    schedule: 2,
    title: "Meeting w/ Customer Management section",
    time: "15:00 - 16:00",
    interviewer: "ACSM: Ms. Chandni",
    interviewee: "Mr. Wan Yunus (SM) no link",
    isOnline: true,
    teamsLink:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZjlkYzlkMDctNDJkYi00Y2IxLTllYjctYjRjMGQ1N2I3OWU0%40thread.v2/0?context=%7b%22Tid%22%3a%2221106e7a-134b-4466-9555-3543978c7550%22%2c%22Oid%22%3a%2290f5645c-65fd-4541-b320-ba0814d02249%22%7d",
  },
  {
    date: "2024-08-06",
    schedule: 3,
    title: "Meeting w/ Corporate Planning Section",
    time: "15:00 - 16:00",
    interviewer: "AFSMAD: Mr. Inoue , ACSM: Ms. Fara",
    interviewee: "Ms. Noraida Tahir (SM)",
    isOnline: true,
    teamsLink:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_NDg1OTBlOWEtNTczNy00YjQ0LWEzMTctMmYyM2U5OWQ5MDUz%40thread.v2/0?context=%7b%22Tid%22%3a%2221106e7a-134b-4466-9555-3543978c7550%22%2c%22Oid%22%3a%227b4fc21e-8713-4ac5-bcfd-faaa43d02a4d%22%7d",
  },
  // August 7, 2024 (Real Data)
  {
    date: "2024-08-07",
    schedule: 2,
    title: "Meeting w/ Claims Unit",
    time: "10:00 - 11:00",
    interviewer: "ACSM: Ms. Chandni",
    interviewee: "Mr. Wan Yunus (SM) (Physical)",
    isOnline: false,
    teamsLink:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZDdhNDMxODAtM2M0Ni00NTViLWI1ZDAtMDgzMDM4N2ZjMjY0%40thread.v2/0?context=%7b%22Tid%22%3a%2221106e7a-134b-4466-9555-3543978c7550%22%2c%22Oid%22%3a%22b253f2f1-a78d-4903-8a92-3f98323ebc5d%22%7d",
  },
  {
    date: "2024-08-07",
    schedule: 1,
    title: "Meeting w/ Corporate Broking Unit",
    time: "14:00 - 15:00",
    interviewer: "AFSMAD: Ms. Kayli",
    interviewee: "Mr. Eddy Salman (M)",
    isOnline: true,
    teamsLink:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZDdhNDMxODAtM2M0Ni00NTViLWI1ZDAtMDgzMDM4N2ZjMjY0%40thread.v2/0?context=%7b%22Tid%22%3a%2221106e7a-134b-4466-9555-3543978c7550%22%2c%22Oid%22%3a%22b253f2f1-a78d-4903-8a92-3f98323ebc5d%22%7d",
  },
  {
    date: "2024-08-07",
    schedule: 2,
    title: "Meeting w/ Risk Management Unit",
    time: "14:00 - 15:00",
    interviewer: "AFSMAD: Mr. Inoue, ACSM: Ms. Fara, Ms. Chandni",
    interviewee: "Mr. Lim Wui Hung (M)",
    isOnline: true,
    teamsLink:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_NDg1OTBlOWEtNTczNy00YjQ0LWEzMTctMmYyM2U5OWQ5MDUz%40thread.v2/0?context=%7b%22Tid%22%3a%2221106e7a-134b-4466-9555-3543978c7550%22%2c%22Oid%22%3a%227b4fc21e-8713-4ac5-bcfd-faaa43d02a4d%22%7d",
  },
  {
    date: "2024-08-07",
    schedule: 1,
    title: "Taking Stock Meeting",
    time: "16:00 - 17:00",
    interviewer: "Audit team - ACSM IAD, AFSMAD ",
    interviewee: "Internal Meeting",
    isOnline: true,
    teamsLink:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZDdhNDMxODAtM2M0Ni00NTViLWI1ZDAtMDgzMDM4N2ZjMjY0%40thread.v2/0?context=%7b%22Tid%22%3a%2221106e7a-134b-4466-9555-3543978c7550%22%2c%22Oid%22%3a%22b253f2f1-a78d-4903-8a92-3f98323ebc5d%22%7d",
  },
  // August 8, 2024 (Real Data)
  {
    date: "2024-08-08",
    schedule: 5,
    title: "Meeting w/ Corporate Management Dept",
    time: "10:00 - 11:00",
    interviewer: "AFSMAD: Mr. Inoue, ACSM: Ms. Fara, Ms. Chandni",
    interviewee: "Mr. Ken Tanaka (GM)",
    isOnline: true,
    teamsLink:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_NDg1OTBlOWEtNTczNy00YjQ0LWEzMTctMmYyM2U5OWQ5MDUz%40thread.v2/0?context=%7b%22Tid%22%3a%2221106e7a-134b-4466-9555-3543978c7550%22%2c%22Oid%22%3a%227b4fc21e-8713-4ac5-bcfd-faaa43d02a4d%22%7d",
  },
  {
    date: "2024-08-08",
    schedule: 1,
    title: "Meeting w/ Product Development Unit",
    time: "10:00 - 11:00",
    interviewer: "AFSMAD: Ms. Kayli",
    interviewee: "Ms. Alice Mok (M)",
    isOnline: true,
    teamsLink:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZDdhNDMxODAtM2M0Ni00NTViLWI1ZDAtMDgzMDM4N2ZjMjY0%40thread.v2/0?context=%7b%22Tid%22%3a%2221106e7a-134b-4466-9555-3543978c7550%22%2c%22Oid%22%3a%22b253f2f1-a78d-4903-8a92-3f98323ebc5d%22%7d",
  },
  {
    date: "2024-08-08",
    schedule: 2,
    title: "Meeting w/ Customer Care Unit",
    time: "10:00 - 11:00",
    interviewer: "AFSMAD: Ms. Chandni",
    interviewee: "Mr. Shazwani Rosly (SE) No Link",
    isOnline: true,
    teamsLink:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZDdhNDMxODAtM2M0Ni00NTViLWI1ZDAtMDgzMDM4N2ZjMjY0%40thread.v2/0?context=%7b%22Tid%22%3a%2221106e7a-134b-4466-9555-3543978c7550%22%2c%22Oid%22%3a%22b253f2f1-a78d-4903-8a92-3f98323ebc5d%22%7d",
  },
  {
    date: "2024-08-08",
    schedule: 1,
    title: "Meeting w/ Marketing Unit",
    time: "15:00 - 16:00",
    interviewer: "AFSMAD: Ms. Kayli",
    interviewee: "Mr. Lucas Ho (M)",
    isOnline: true,
    teamsLink:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZDdhNDMxODAtM2M0Ni00NTViLWI1ZDAtMDgzMDM4N2ZjMjY0%40thread.v2/0?context=%7b%22Tid%22%3a%2221106e7a-134b-4466-9555-3543978c7550%22%2c%22Oid%22%3a%22b253f2f1-a78d-4903-8a92-3f98323ebc5d%22%7d",
  },
  {
    date: "2024-08-08",
    schedule: 2,
    title: "Meeting w/ Internal Audit",
    time: "15:00 - 16:00",
    interviewer: "AFSMAD: Mr. Inoue",
    interviewee: "Ms. Norizan Mohamad (M)",
    isOnline: true,
    teamsLink:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_NDg1OTBlOWEtNTczNy00YjQ0LWEzMTctMmYyM2U5OWQ5MDUz%40thread.v2/0?context=%7b%22Tid%22%3a%2221106e7a-134b-4466-9555-3543978c7550%22%2c%22Oid%22%3a%227b4fc21e-8713-4ac5-bcfd-faaa43d02a4d%22%7d",
  },
  // August 9, 2024 (Real Data)
  {
    date: "2024-08-09",
    schedule: 1,
    title: "Taking Stock Meeting",
    time: "16:00 - 17:00",
    interviewer: "Audit team - ACSM IAD, AFSMAD",
    interviewee: "Internal Meeting",
    isOnline: true,
    teamsLink:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZDdhNDMxODAtM2M0Ni00NTViLWI1ZDAtMDgzMDM4N2ZjMjY0%40thread.v2/0?context=%7b%22Tid%22%3a%2221106e7a-134b-4466-9555-3543978c7550%22%2c%22Oid%22%3a%22b253f2f1-a78d-4903-8a92-3f98323ebc5d%22%7d",
  },
  // August 12, 2024 (Real Data)
  {
    date: "2024-08-12",
    schedule: 1,
    title: "Meeting w/ Sales Development Unit",
    time: "10:00 - 11:00",
    interviewer: "AFSMAD: Ms. Kayli",
    interviewee: "Ms. Shelly Tan (M)",
    isOnline: false,
  },
  {
    date: "2024-08-12",
    schedule: 2,
    title: "Meeting w/ Finance Section",
    time: "10:00 - 11:00",
    interviewer: "AFSMAD: Mr. Aaron",
    interviewee: "Ms. Seline Lai  (SM)",
    isOnline: false,
  },
  {
    date: "2024-08-12",
    schedule: 3,
    title: "Meeting w/ Legal & Compliance Unit",
    time: "10:00 - 11:00",
    interviewer: "AFSMAD: Mr. Inoue, ACSM: Ms. Fara, Ms. Chandni",
    interviewee: "Ms. Natasha Hakim (AM)",
    isOnline: false,
  },
  {
    date: "2024-08-12",
    schedule: 4,
    title: "Meeting w/ IT Unit",
    time: "10:00 - 11:00",
    interviewer: "AFSMAD: Mr. Koyama",
    interviewee: "Mr. Loo Teik Yong (M)",
    isOnline: false,
  },
  {
    date: "2024-08-12",
    schedule: 3,
    title: "Meeting w/ Claims Unit",
    time: "14:00 - 15:00",
    interviewer: "ACSM: Ms. Chandni",
    interviewee: "Mr. Abdul Mu'in (AM)",
    isOnline: false,
  },
  {
    date: "2024-08-12",
    schedule: 1,
    title: "Taking Stock Meeting",
    time: "16:00 - 17:00",
    interviewer: "Audit team - ACSM IAD, AFSMAD",
    interviewee: "Internal Meeting",
    isOnline: false,
  },
  // August 13, 2024 (Real Data)
  {
    date: "2024-08-13",
    schedule: 1,
    title: "Meeting w/ HR & Admin Section",
    time: "10:00 - 11:00",
    interviewer: "AFSMAD: Mr. Aaron",
    interviewee: "Ms. Kartini Ismail (M)",
    isOnline: false,
  },
  {
    date: "2024-08-13",
    schedule: 2,
    title: "Meeting w/ Corporate Planning Section",
    time: "10:00 - 11:00",
    interviewer: "AFSMAD: Mr. Inoue,  ACSM: Ms. Fara",
    interviewee: "Ms. Noraida Tahir (SM)",
    isOnline: false,
  },
  {
    date: "2024-08-13",
    schedule: 3,
    title: "Meeting w/ Customer Care Unit",
    time: "10:00 - 11:00",
    interviewer: "AFSMAD: Ms. Chandni",
    interviewee: "Mr. Shazwani Rosly (SE)",
    isOnline: false,
  },
  {
    date: "2024-08-13",
    schedule: 4,
    title: "Meeting w/ Corporate Broking Unit",
    time: "10:00 - 11:00",
    interviewer: "AFSMAD: Ms. Kayli",
    interviewee: "Mr. Eddy Salman (M)",
    isOnline: false,
  },
  {
    date: "2024-08-13",
    schedule: 2,
    title: "Meeting w/ Risk Management Unit",
    time: "14:00 - 15:00",
    interviewer: "AFSMAD: Mr. Inoue, ACSM: Ms. Fara, Ms. Chandni",
    interviewee: "Mr. Lim Wui Hung (M)",
    isOnline: false,
  },
  // August 14, 2024 (Real Data)
  {
    date: "2024-08-14",
    schedule: 1,
    title: "Meeting w/ Product Development Unit",
    time: "10:00 - 11:00",
    interviewer: "AFSMAD: Ms. Kayli",
    interviewee: "Ms. Alice Mok (M)",
    isOnline: false,
  },
  {
    date: "2024-08-14",
    schedule: 2,
    title: "Meeting w/ Internal Audit",
    time: "10:00 - 11:00",
    interviewer: "AFSMAD: Mr. Inoue",
    interviewee: "Ms. Norizan Mohamad (M)",
    isOnline: false,
  },
  {
    date: "2024-08-14",
    schedule: 1,
    title: "Taking Stock Meeting",
    time: "16:00 - 17:00",
    interviewer: "Audit team - ACSM IAD, AFSMAD",
    interviewee: "Internal Meeting",
    isOnline: false,
  },
  // August 15, 2024 (Real Data)
  {
    date: "2024-08-15",
    schedule: 1,
    title: "Meeting w/ Marketing Unit",
    time: "10:00 - 11:00",
    interviewer: "AFSMAD: Ms. Kayli",
    interviewee: "Mr. Lucas Ho (M)",
    isOnline: false,
  },
  // August 16, 2024 (Real Data)
  {
    date: "2024-08-16",
    schedule: 1,
    title:
      "Wrap-up with MD - Go thru the observation and identify O/S matters w/ MD before audit member leave AIBM office",
    time: "16:00 - 17:00",
    interviewer:
      "AFSMAD: Ms. Kayli, Mr. Inoue,  Mr. Aaron, Mr. Koyama,  ACSM IAD: Ms. Fara, Ms. Chandni",
    interviewee: "Mr. Chen Heng Guan - Managing Director, Ms. Norizan Mohamad",
    isOnline: false,
  },
  // August 26, 2024 (Real Data)
  {
    date: "2024-08-26",
    schedule: 1,
    title:
      "Explanation of Audit Findings to MD 1000 – 1200 HKT , 1100 – 1300 JST",
    time: "10:00 - 11:00",
    interviewer: "Audit team - ACSM IAD, AFSMAD ",
    interviewee: "Mr. Chen Heng Guan - Managing Director",
    isOnline: true,
    teamsLink:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZDdhNDMxODAtM2M0Ni00NTViLWI1ZDAtMDgzMDM4N2ZjMjY0%40thread.v2/0?context=%7b%22Tid%22%3a%2221106e7a-134b-4466-9555-3543978c7550%22%2c%22Oid%22%3a%22b253f2f1-a78d-4903-8a92-3f98323ebc5d%22%7d",
  },
  // August 28, 2024 (Real Data)
  {
    date: "2024-08-28",
    schedule: 1,
    title: "Closing Meeting 0930 – 1130 HKT , 1030 – 1230 JST",
    time: "10:00 - 11:00",
    interviewer: "Mr.Nakao and all audit members",
    interviewee: "MD and all dept/section head",
    isOnline: true,
    teamsLink:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZDAyMzIyMGItZDJmYy00YTY3LWIzYzEtNDgyZmEwNDdjY2I0%40thread.v2/0?context=%7b%22Tid%22%3a%222f5fc54c-f978-4bcb-afe9-a826a312c217%22%2c%22Oid%22%3a%225bd15d04-7da2-4f8e-926b-27eeb9184194%22%7d",
  },
];

function App() {
  const [currentDate, setCurrentDate] = useState(new Date("2024-08-05"));

  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const filterInterviews = (date) => {
    return interviews.filter(
      (interview) => interview.date === formatDate(date)
    );
  };

  const getNextDateWithInterviews = (startDate, direction) => {
    let date = new Date(startDate);
    let iterations = 0;
    while (iterations < 10000) {
      date.setDate(date.getDate() + direction);
      if (filterInterviews(date).length > 0) {
        return date;
      }
      iterations++;
    }
    return null; // No more dates with interviews
  };

  const nextDay = () => {
    const nextDate = getNextDateWithInterviews(currentDate, 1);
    if (nextDate) {
      setCurrentDate(nextDate);
    }
  };

  const prevDay = () => {
    const prevDate = getNextDateWithInterviews(currentDate, -1);
    if (prevDate) {
      setCurrentDate(prevDate);
    }
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <img
          src="https://aeoninsurance.com.my/wp-content/uploads/2023/04/cropped-logo.png"
          alt="Logo"
          style={logoStyle}
        />
        <h1 style={titleStyle}>2024 AFS Audit Interview Schedules for AIBM</h1>
      </header>
      <nav style={navigationStyle}>
        <button onClick={prevDay} style={buttonStyle}>
          Previous Day
        </button>
        <div style={dateDisplayStyle}>
          <span style={dateTextStyle}>{currentDate.toDateString()}</span>
        </div>
        <button onClick={nextDay} style={buttonStyle}>
          Next Day
        </button>
      </nav>
      <main style={mainStyle}>
        {filterInterviews(currentDate).map((interview, index) => (
          <div key={index} style={cardStyle}>
            <div style={cardHeaderStyle(interview.isOnline)}>
              <h2 style={cardTitleStyle}>{interview.title}</h2>
              <span style={badgeStyle(interview.isOnline)}>
                {interview.isOnline ? "Online" : "Onsite"}
              </span>
            </div>
            <div style={cardContentStyle}>
              <div>
                <p style={infoStyle}>
                  <span style={labelStyle}>Time:</span> {interview.time}
                </p>
                <p style={infoStyle}>
                  <span style={labelStyle}>Interviewer:</span>{" "}
                  {interview.interviewer}
                </p>
                <p style={infoStyle}>
                  <span style={labelStyle}>Interviewee:</span>{" "}
                  {interview.interviewee}
                </p>
                <p style={infoStyle}>
                  <span style={labelStyle}>Schedule:</span> {interview.schedule}
                </p>
              </div>
              {interview.teamsLink && (
                <a
                  href={interview.teamsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  Join Teams Meeting
                </a>
              )}
            </div>
          </div>
        ))}
      </main>
      {filterInterviews(currentDate).length === 0 && (
        <p style={noInterviewsStyle}>No interviews scheduled for this day.</p>
      )}
    </div>
  );
}

// Styles
const containerStyle = {
  backgroundColor: "#f5f5f5",
  minHeight: "100vh",
  fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  color: "#333",
};

const headerStyle = {
  backgroundColor: "white",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const logoStyle = {
  width: "400px", // Increase the size by 20%
  marginBottom: "40px",
};

const titleStyle = {
  fontSize: "32px",
  fontWeight: "300",
  color: "#983986",
  margin: 0,
};

const navigationStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  backgroundColor: "white",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const buttonStyle = {
  backgroundColor: "#f0f0f0",
  border: "none",
  color: "#333",
  fontSize: "16px",
  cursor: "pointer",
  padding: "10px 20px",
  borderRadius: "5px",
  transition: "background-color 0.3s ease",
};

const dateDisplayStyle = {
  margin: "0 20px",
  padding: "10px 20px",
  backgroundColor: "#983986",
  borderRadius: "5px",
};

const dateTextStyle = {
  color: "white",
  fontSize: "18px",
  fontWeight: "bold",
};

const mainStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "20px",
  padding: "20px",
  maxWidth: "1200px",
  margin: "0 auto",
};

const cardStyle = {
  backgroundColor: "white",
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
};

const cardHeaderStyle = (isOnline) => ({
  backgroundColor: isOnline ? "#045591" : "#059212",
  padding: "15px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "80px", // Ensure consistent height
});

const cardTitleStyle = {
  fontSize: "18px",
  fontWeight: "500",
  color: "white",
  margin: 0,
  flex: 1,
};

const badgeStyle = (isOnline) => ({
  padding: "5px 10px",
  backgroundColor: "rgba(255,255,255,0.2)",
  color: "white",
  borderRadius: "20px",
  fontSize: "14px",
  fontWeight: "bold",
  marginLeft: "10px",
  whiteSpace: "nowrap",
});

const cardContentStyle = {
  padding: "25px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flex: 1,
};

const infoStyle = {
  margin: "12px 0",
  fontSize: "16px",
  lineHeight: "1.5",
};

const labelStyle = {
  fontWeight: "bold",
  color: "#666",
  marginRight: "8px",
};

const linkStyle = {
  display: "inline-block",
  marginTop: "20px",
  padding: "12px 20px",
  backgroundColor: "#000000",
  color: "white",
  textDecoration: "none",
  borderRadius: "5px",
  transition: "background-color 0.3s ease",
  textAlign: "center",
  fontWeight: "500",
  alignSelf: "flex-start",
};

const noInterviewsStyle = {
  textAlign: "center",
  color: "#666",
  marginTop: "40px",
  fontSize: "20px",
  fontStyle: "italic",
};

export default App;
