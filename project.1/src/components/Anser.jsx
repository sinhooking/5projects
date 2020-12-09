import React, { useEffect, useState } from "react";

const Anser = ({ rows, userRows }) => {
  const [anser, setanser] = useState("dddd");
  useEffect(() => {
    setanser(
      `${
        userRows
          .map(
            (userItem, index) =>
              rows[index].a_list.find((x) => x.a_seq === userItem).a_correct
          )
          .filter((item) => item === "정답").length * 5
      } 점`
    );
  }, []);

  return (
    <div>
      <p>{anser}</p>
    </div>
  );
};

export default Anser;
