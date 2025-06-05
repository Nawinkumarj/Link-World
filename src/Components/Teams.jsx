import React from "react";
import { assets } from "../assets/assets";
import SectionTitle from './SectionTitle'

const Teams = () => {
  return (
    <>
    <SectionTitle text1={'T'} text2={'Teams'} />
      <div id='teams' className="teamsContainer">
        <h1 className="name">
          <span>Dr</span> SANJAY THAKRAR
        </h1>

        <h1 className="position">CEO & CHAIRMAN</h1>

        <div className="teamDetails">
          <img src={assets.t1} />
          <div>
            <p>
              Dr. Sanjay Thakrar is the Founder of Euro Exim Bank ,a challenger
              bank in Trade Finance, Headquartered in St. Lucia, with a
              Representative Office in London.
            </p>

            <p>
              The Bank has grown its network of International agents and
              partners to span over 180 Countries, supported by an independent
              back-office service provider in India, providing sales onboarding,
              local compliance, legal and IT support.
            </p>

            <p>
              Dr. Sanjay Thakrar is a holder of Bachelor of Science
              qualification and a Masters’ Degree, with an extensive financial
              background, working in invoice discounting, immersed in the entire
              life cycle of imports and exports from inception to settlement,
              through freight forwarding, insurance, importers, transporters and
              shipping
            </p>

            <p>
              With experience of running his own business enterprises, he has a
              unique perspective of both technical and business requirements,
              and keen, not only on growth in revenue and market share but
              participation and contribution to strong CSR programs, especially
              in emerging markets.
            </p>

            <p>
              Dr. Sanjay Thakrar is a leading knowledge source on the creation
              and issuance of Trade Finance instruments, such Letter of Credits,
              Bank Guarantees, Standby Letters of Credit and Bonds.
            </p>

            <p>
              Dr. Sanjay Thakrar is also well versed in SWIFT systems and
              operations and was a major contributor to the technology and
              specification of EEB’s advanced in-house SimpleX Trade Finance
              Platform.
            </p>
          </div>
        </div>
      </div>

      <div className='teamContentSm'>
        <p>
          Dr. Sanjay Thakrar is the Founder of Euro Exim Bank ,a challenger bank
          in Trade Finance, Headquartered in St. Lucia, with a Representative
          Office in London.
        </p>

        <p>
          The Bank has grown its network of International agents and partners to
          span over 180 Countries, supported by an independent back-office
          service provider in India, providing sales onboarding, local
          compliance, legal and IT support.
        </p>

        <p>
          Dr. Sanjay Thakrar is a holder of Bachelor of Science qualification
          and a Masters’ Degree, with an extensive financial background, working
          in invoice discounting, immersed in the entire life cycle of imports
          and exports from inception to settlement, through freight forwarding,
          insurance, importers, transporters and shipping
        </p>

        <p>
          With experience of running his own business enterprises, he has a
          unique perspective of both technical and business requirements, and
          keen, not only on growth in revenue and market share but participation
          and contribution to strong CSR programs, especially in emerging
          markets.
        </p>

        <p>
          Dr. Sanjay Thakrar is a leading knowledge source on the creation and
          issuance of Trade Finance instruments, such Letter of Credits, Bank
          Guarantees, Standby Letters of Credit and Bonds.
        </p>

        <p>
          Dr. Sanjay Thakrar is also well versed in SWIFT systems and operations
          and was a major contributor to the technology and specification of
          EEB’s advanced in-house SimpleX Trade Finance Platform.
        </p>
      </div>
    </>
  );
};

export default Teams;
