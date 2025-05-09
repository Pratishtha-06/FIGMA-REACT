import React, { createContext, useContext, useState } from 'react';

const MembersContext = createContext();

export const MembersProvider = ({ children }) => {
  const [member, setMember] = useState(1); // store number directly

  return (
    <MembersContext.Provider value={{ member, setMember }}>
      {children}
    </MembersContext.Provider>
  );
};

export const useMemberContext = () => useContext(MembersContext);
