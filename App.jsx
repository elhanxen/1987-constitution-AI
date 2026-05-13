import { useState, useRef, useEffect } from "react";

const CONSTITUTION_TEXT = `THE 1987 CONSTITUTION OF THE REPUBLIC OF THE PHILIPPINES

PREAMBLE
We, the sovereign Filipino people, imploring the aid of Almighty God, in order to build a just and humane society, and establish a Government that shall embody our ideals and aspirations, promote the common good, conserve and develop our patrimony, and secure to ourselves and our posterity, the blessings of independence and democracy under the rule of law and a regime of truth, justice, freedom, love, equality, and peace, do ordain and promulgate this Constitution.

ARTICLE I - NATIONAL TERRITORY
The national territory comprises the Philippine archipelago, with all the islands and waters embraced therein, and all other territories over which the Philippines has sovereignty or jurisdiction, consisting of its terrestrial, fluvial and aerial domains, including its territorial sea, the seabed, the subsoil, the insular shelves, and other submarine areas.

ARTICLE II - DECLARATION OF PRINCIPLES AND STATE POLICIES
Section 1. The Philippines is a democratic and republican State. Sovereignty resides in the people and all government authority emanates from them.
Section 2. The Philippines renounces war as an instrument of national policy, adopts the generally accepted principles of international law as part of the law of the land and adheres to the policy of peace, equality, justice, freedom, cooperation, and amity with all nations.
Section 3. Civilian authority is, at all times, supreme over the military.
Section 4. The prime duty of the Government is to serve and protect the people.
Section 5. The maintenance of peace and order, the protection of life, liberty, and property, and promotion of the general welfare are essential for the enjoyment by all the people of the blessings of democracy.
Section 6. The separation of Church and State shall be inviolable.
Section 7. The State shall pursue an independent foreign policy.
Section 8. The Philippines adopts and pursues a policy of freedom from nuclear weapons in its territory.
Section 11. The State values the dignity of every human person and guarantees full respect for human rights.
Section 12. The State recognizes the sanctity of family life and shall protect and strengthen the family. It shall equally protect the life of the mother and the life of the unborn from conception.
Section 14. The State recognizes the role of women in nation-building, and shall ensure the fundamental equality before the law of women and men.
Section 26. The State shall guarantee equal access to opportunities for public service and prohibit political dynasties as may be defined by law.
Section 27. The State shall maintain honesty and integrity in the public service and take positive and effective measures against graft and corruption.

ARTICLE III - BILL OF RIGHTS
Section 1. No person shall be deprived of life, liberty, or property without due process of law, nor shall any person be denied the equal protection of the laws.
Section 2. The right of the people to be secure in their persons, houses, papers, and effects against unreasonable searches and seizures shall be inviolable.
Section 3. The privacy of communication and correspondence shall be inviolable except upon lawful order of the court. Any evidence obtained in violation of this shall be inadmissible.
Section 4. No law shall be passed abridging the freedom of speech, of expression, or of the press, or the right of the people peaceably to assemble and petition the government for redress of grievances.
Section 5. No law shall be made respecting an establishment of religion, or prohibiting the free exercise thereof. No religious test shall be required for the exercise of civil or political rights.
Section 6. The liberty of abode and of changing the same within the limits prescribed by law shall not be impaired except upon lawful order of the court.
Section 7. The right of the people to information on matters of public concern shall be recognized.
Section 8. The right of the people to form unions, associations, or societies for purposes not contrary to law shall not be abridged.
Section 9. Private property shall not be taken for public use without just compensation.
Section 10. No law impairing the obligation of contracts shall be passed.
Section 11. Free access to the courts and adequate legal assistance shall not be denied to any person by reason of poverty.
Section 12. Any person under investigation shall have the right to remain silent and to have competent and independent counsel. No torture, force, violence, threat, or intimidation shall be used against him.
Section 13. All persons shall be bailable except those charged with offenses punishable by reclusion perpetua when evidence of guilt is strong. Excessive bail shall not be required.
Section 14. The accused shall be presumed innocent until the contrary is proved.
Section 15. The privilege of the writ of habeas corpus shall not be suspended except in cases of invasion or rebellion.
Section 16. All persons shall have the right to a speedy disposition of their cases.
Section 17. No person shall be compelled to be a witness against himself.
Section 18. No person shall be detained solely by reason of his political beliefs and aspirations.
Section 19. Excessive fines shall not be imposed, nor cruel, degrading or inhuman punishment inflicted.
Section 20. No person shall be imprisoned for debt or non-payment of a poll tax.
Section 21. No person shall be twice put in jeopardy of punishment for the same offense.
Section 22. No ex post facto law or bill of attainder shall be enacted.

ARTICLE IV - CITIZENSHIP
Section 1. Citizens of the Philippines: those who are citizens at time of adoption; those whose fathers or mothers are citizens; those born before January 17, 1973, of Filipino mothers, who elect Philippine citizenship; those naturalized in accordance with law.
Section 2. Natural-born citizens are those who are citizens from birth without having to perform any act to acquire or perfect their Philippine citizenship.
Section 3. Philippine citizenship may be lost or reacquired in the manner provided by law.
Section 4. Citizens of the Philippines who marry aliens shall retain their citizenship, unless by their act or omission, they are deemed to have renounced it.
Section 5. Dual allegiance of citizens is inimical to the national interest and shall be dealt with by law.

ARTICLE V - SUFFRAGE
Section 1. Suffrage may be exercised by all citizens not otherwise disqualified by law, who are at least eighteen years of age, and who shall have resided in the Philippines for at least one year, and in the place wherein they propose to vote, for at least six months immediately preceding the election. No literacy, property, or other substantive requirement shall be imposed.
Section 2. The Congress shall provide a system for absentee voting by qualified Filipinos abroad.

ARTICLE VI - THE LEGISLATIVE DEPARTMENT
Section 1. The legislative power shall be vested in the Congress of the Philippines which shall consist of a Senate and a House of Representatives.
Section 2. The Senate shall be composed of twenty-four Senators elected at large by qualified voters.
Section 3. No person shall be a Senator unless he is a natural-born citizen, at least thirty-five years of age, able to read and write, a registered voter, and a resident of the Philippines for not less than two years immediately preceding the election.
Section 4. The term of office of Senators shall be six years. No Senator shall serve for more than two consecutive terms.
Section 5. The House of Representatives shall be composed of not more than two hundred fifty members. Party-list representatives shall constitute twenty per centum of the total number of representatives.
Section 6. No person shall be a Member of the House of Representatives unless he is a natural-born citizen, at least twenty-five years of age, able to read and write, and a registered voter in the district.
Section 7. Members of the House of Representatives shall be elected for a term of three years. No Member shall serve for more than three consecutive terms.
Section 8. The regular election of the Senators and Members of the House of Representatives shall be held on the second Monday of May.
Section 15. The Congress shall convene once every year on the fourth Monday of July for its regular session.
Section 16. The Senate shall elect its President and the House of Representatives its Speaker by a majority vote of all its respective Members.
Section 17. The Senate and House shall each have an Electoral Tribunal which shall be the sole judge of all contests relating to the election, returns, and qualifications of their respective Members.
Section 23. The Congress shall have the sole power to declare the existence of a state of war by a vote of two-thirds of both Houses.
Section 24. All appropriation, revenue or tariff bills shall originate exclusively in the House of Representatives.
Section 26. Every bill passed by the Congress shall embrace only one subject. No bill shall become a law unless it has passed three readings on separate days.
Section 27. Every bill passed by the Congress shall be presented to the President. A vetoed bill can become law if two-thirds of all Members of each House agree to pass it.

ARTICLE VII - EXECUTIVE DEPARTMENT
Section 1. The executive power shall be vested in the President of the Philippines.
Section 2. No person may be elected President unless he is a natural-born citizen, a registered voter, able to read and write, at least forty years of age on the day of the election, and a resident of the Philippines for at least ten years immediately preceding such election.
Section 3. There shall be a Vice-President who shall have the same qualifications and term of office as the President.
Section 4. The President and Vice-President shall be elected by direct vote of the people for a term of six years. The President shall not be eligible for any re-election.
Section 8. In case of death, permanent disability, removal, or resignation of the President, the Vice-President shall become President.
Section 13. The President, Vice-President, Members of the Cabinet shall not hold any other office or employment during their tenure.
Section 16. The President shall nominate and appoint the heads of executive departments, ambassadors, and other officers with the consent of the Commission on Appointments.
Section 17. The President shall have control of all the executive departments, bureaus, and offices.
Section 18. The President shall be the Commander-in-Chief of all armed forces. In case of invasion or rebellion, he may suspend the privilege of the writ of habeas corpus or place the Philippines under martial law for a period not exceeding sixty days.
Section 19. The President may grant reprieves, commutations, and pardons after conviction by final judgment. He may also grant amnesty with the concurrence of a majority of all Members of Congress.
Section 21. No treaty or international agreement shall be valid and effective unless concurred in by at least two-thirds of all Members of the Senate.

ARTICLE VIII - JUDICIAL DEPARTMENT
Section 1. The judicial power shall be vested in one Supreme Court and in such lower courts as may be established by law.
Section 4. The Supreme Court shall be composed of a Chief Justice and fourteen Associate Justices.
Section 7. A Member of the Supreme Court must be at least forty years of age and must have been for fifteen years or more a judge or engaged in the practice of law.
Section 8. A Judicial and Bar Council is created under the supervision of the Supreme Court.
Section 9. Members of the Supreme Court and judges of lower courts shall be appointed by the President from a list of at least three nominees prepared by the Judicial and Bar Council.
Section 11. Members of the Supreme Court and judges of lower courts shall hold office during good behavior until they reach the age of seventy years.

ARTICLE IX - CONSTITUTIONAL COMMISSIONS
The Constitutional Commissions are the Civil Service Commission, the Commission on Elections, and the Commission on Audit. They are independent bodies.
Civil Service Commission: composed of a Chairman and two Commissioners. Appointments shall be made only according to merit and fitness.
Commission on Elections: composed of a Chairman and six Commissioners. It enforces and administers all laws relative to the conduct of an election, plebiscite, initiative, referendum, and recall.
Commission on Audit: composed of a Chairman and two Commissioners. It has the power to examine, audit, and settle all accounts pertaining to the revenue and receipts of the Government.

ARTICLE X - LOCAL GOVERNMENT
Section 1. The territorial and political subdivisions are the provinces, cities, municipalities, and barangays. There shall be autonomous regions in Muslim Mindanao and the Cordilleras.
Section 2. The territorial and political subdivisions shall enjoy local autonomy.
Section 5. Each local government unit shall have the power to create its own sources of revenues and to levy taxes, fees and charges.
Section 8. The term of office of elective local officials shall be three years and no such official shall serve for more than three consecutive terms.

ARTICLE XI - ACCOUNTABILITY OF PUBLIC OFFICERS
Section 1. Public office is a public trust. Public officers and employees must, at all times, be accountable to the people, serve them with utmost responsibility, integrity, loyalty, and efficiency.
Section 2. The President, Vice-President, Members of the Supreme Court, Members of Constitutional Commissions, and the Ombudsman may be removed from office on impeachment for culpable violation of the Constitution, treason, bribery, graft and corruption, other high crimes, or betrayal of public trust.
Section 3. The House of Representatives shall have the exclusive power to initiate all cases of impeachment. The Senate shall have the sole power to try and decide all cases of impeachment. No person shall be convicted without the concurrence of two-thirds of all Members of the Senate.
Section 5. There is hereby created the independent Office of the Ombudsman.
Section 11. The Ombudsman and his Deputies shall serve for a term of seven years without reappointment.
Section 17. A public officer shall submit a declaration under oath of his assets, liabilities, and net worth upon assumption of office.

ARTICLE XII - NATIONAL ECONOMY AND PATRIMONY
Section 2. All lands of the public domain, waters, minerals, coal, petroleum, and other natural resources are owned by the State.
Section 10. The Congress shall reserve to citizens of the Philippines or to corporations at least sixty per centum of whose capital is owned by such citizens, certain areas of investments.
Section 11. No franchise for a public utility shall be granted except to citizens or corporations with at least sixty per centum capital owned by Filipino citizens.

ARTICLE XIII - SOCIAL JUSTICE AND HUMAN RIGHTS
Section 1. The Congress shall give highest priority to the enactment of measures that protect and enhance the right of all the people to human dignity.
Section 3. The State shall afford full protection to labor, local and overseas. Workers shall have the right to self-organization, collective bargaining, and peaceful concerted activities including the right to strike.
Section 4. The State shall undertake an agrarian reform program. Farmers and farmworkers who are landless shall have the right to own the lands they till.
Section 17. There is hereby created an independent Commission on Human Rights.

ARTICLE XIV - EDUCATION, SCIENCE AND TECHNOLOGY, ARTS, CULTURE AND SPORTS
Section 1. The State shall protect and promote the right of all citizens to quality education at all levels.
Section 2. The State shall establish and maintain a system of free public education in the elementary and high school levels. Elementary education is compulsory for all children of school age.
Section 5. Academic freedom shall be enjoyed in all institutions of higher learning.
Section 6. The national language of the Philippines is Filipino.
Section 7. For purposes of communication and instruction, the official languages of the Philippines are Filipino and English.

ARTICLE XV - THE FAMILY
Section 1. The State recognizes the Filipino family as the foundation of the nation.
Section 2. Marriage, as an inviolable social institution, is the foundation of the family and shall be protected by the State.

ARTICLE XVI - GENERAL PROVISIONS
Section 1. The flag of the Philippines shall be red, white, and blue, with a sun and three stars.
Section 3. The State may not be sued without its consent.
Section 5. No member of the military shall engage in any partisan political activity, except to vote.
Section 6. The State shall establish and maintain one police force, which shall be national in scope and civilian in character.

ARTICLE XVII - AMENDMENTS OR REVISIONS
Section 1. Any amendment to this Constitution may be proposed by Congress upon a vote of three-fourths of all its Members, or by a constitutional convention.
Section 2. Amendments may also be directly proposed by the people through initiative upon a petition of at least twelve per centum of the total number of registered voters.
Section 4. Any amendment or revision shall be valid when ratified by a majority of the votes cast in a plebiscite held not earlier than sixty days nor later than ninety days after approval.`;

const SYSTEM_PROMPT = `You are a knowledgeable assistant specializing exclusively in the 1987 Constitution of the Republic of the Philippines. You have been provided the full text of the constitution below.

Answer questions clearly, accurately, and helpfully based on the constitutional text provided. When citing provisions, mention the specific Article and Section number. If a question is not related to the Philippine Constitution, politely redirect the user to ask about the constitution.

Keep answers focused and concise. For complex topics, use clear structure. Always be respectful and educational in tone.

Here is the full text of the 1987 Philippine Constitution:

${CONSTITUTION_TEXT}`;

const SUGGESTED = [
  "What are the fundamental rights in the Bill of Rights?",
  "What are the qualifications to become President?",
  "How does impeachment work?",
  "What is the term limit for senators?",
  "What does the Constitution say about education?",
  "How can the Constitution be amended?",
];

// *** PASTE YOUR GEMINI API KEY HERE ***
const GEMINI_API_KEY = "AIzaSyBAg68jXqO_bslWPmemf6ey_rjiQmGvIbs";

export default function ConstitutionChatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text) => {
    const userText = (text || input).trim();
    if (!userText || loading) return;
    setInput("");
    const newMessages = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const response = await fetch(
       `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents: newMessages.map((m) => ({
              role: m.role === "assistant" ? "model" : "user",
              parts: [{ text: m.content }],
            })),
          }),
        }
      );

      const data = await response.json();
      const reply =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I could not get a response. Please try again.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, an error occurred. Please try again." },
      ]);
    }

    setLoading(false);
    inputRef.current?.focus();
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const isEmpty = messages.length === 0 && !loading;

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", fontFamily: "system-ui, sans-serif", background: "#f5f5f5" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 24px", background: "#003087", color: "#fff" }}>
        <div style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FCD116" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L15 9H22L16.5 13.5L18.5 21L12 17L5.5 21L7.5 13.5L2 9H9L12 2Z"/>
          </svg>
        </div>
        <div>
          <p style={{ margin: 0, fontWeight: 600, fontSize: 16 }}>PH Constitution Assistant</p>
          <p style={{ margin: 0, fontSize: 12, opacity: 0.8 }}>1987 Constitution of the Republic of the Philippines</p>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80" }}></div>
          <span style={{ fontSize: 12, opacity: 0.9 }}>Online</span>
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: "24px 16px", display: "flex", flexDirection: "column", gap: 16, maxWidth: 800, width: "100%", margin: "0 auto", boxSizing: "border-box" }}>
        {isEmpty && (
          <div style={{ textAlign: "center", paddingTop: 32 }}>
            <p style={{ fontSize: 15, color: "#666", marginBottom: 24 }}>
              Ask me anything about the 1987 Philippine Constitution.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
              {SUGGESTED.map((s) => (
                <button key={s} onClick={() => sendMessage(s)} style={{ fontSize: 13, padding: "8px 16px", background: "#fff", border: "1px solid #ddd", borderRadius: 20, cursor: "pointer", color: "#003087", fontWeight: 500 }}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start", gap: 10 }}>
            {m.role === "assistant" && (
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#003087", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FCD116" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L15 9H22L16.5 13.5L18.5 21L12 17L5.5 21L7.5 13.5L2 9H9L12 2Z"/>
                </svg>
              </div>
            )}
            <div style={{
              maxWidth: "75%",
              padding: "12px 16px",
              borderRadius: m.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
              background: m.role === "user" ? "#003087" : "#fff",
              color: m.role === "user" ? "#fff" : "#1a1a1a",
              fontSize: 14,
              lineHeight: 1.7,
              boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
              whiteSpace: "pre-wrap",
            }}>
              {m.content}
            </div>
          </div>
        ))}

        {loading && (
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#003087", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FCD116" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L15 9H22L16.5 13.5L18.5 21L12 17L5.5 21L7.5 13.5L2 9H9L12 2Z"/>
              </svg>
            </div>
            <div style={{ padding: "12px 16px", borderRadius: "18px 18px 18px 4px", background: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", display: "flex", gap: 5, alignItems: "center" }}>
              {[0, 1, 2].map((i) => (
                <span key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: "#003087", display: "inline-block", opacity: 0.4, animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite` }}></span>
              ))}
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={{ padding: "16px", background: "#fff", borderTop: "1px solid #e5e5e5" }}>
        <div style={{ display: "flex", gap: 10, maxWidth: 800, margin: "0 auto", alignItems: "flex-end" }}>
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask about the Philippine Constitution..."
            rows={1}
            style={{ flex: 1, resize: "none", fontSize: 14, padding: "10px 14px", borderRadius: 24, border: "1.5px solid #ddd", fontFamily: "system-ui, sans-serif", lineHeight: 1.5, outline: "none", minHeight: 42, maxHeight: 120 }}
          />
          <button
            onClick={() => sendMessage()}
            disabled={loading || !input.trim()}
            style={{ width: 42, height: 42, borderRadius: "50%", background: loading || !input.trim() ? "#ccc" : "#003087", border: "none", cursor: loading || !input.trim() ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
