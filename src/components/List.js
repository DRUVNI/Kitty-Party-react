import React, { useEffect, useState } from "react";

function List() {
  function separateByGroupName(data) {
    const groups = {};

    data.forEach((item) => {
      const groupName = item.groupName;
      if (!groups[groupName]) {
        groups[groupName] = [];
      }
      groups[groupName].push(item);
    });

    return groups;
  }

  const [usersDataList, setUsersDataList] = useState([]);
  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      const userData = JSON.parse(storedData);
      console.log(separateByGroupName(userData), "plpl");
      setUsersDataList(separateByGroupName(userData));
    }
  }, []);

  return (
    <div>
      <div>
        <h1>User Information</h1>

        {Object.keys(usersDataList)?.length
          ? Object.keys(usersDataList).map((item) => {
              let data = usersDataList[item];
              console.log(data, "lmlm");
              return (
                <div
                  style={{
                    border: "1px solid",
                    padding: ".5rem",

                    height: "50%",
                    width: "50%",
                    gap: "1rem",
                  }}
                >
                  <h3>User Details for {item} Group</h3> <br />
                  <table border={1}>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Material Staus</th>
                        <th>Group Name</th>
                        <th>Phone Number</th>
                        <th>Occupation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.length
                        ? data.map((itemInner) => {
                            console.log(itemInner, "lmlm");
                            return (
                              <tr>
                                <td>
                                  <p>{itemInner.name}</p>
                                </td>

                                <td>
                                  <p>{itemInner.age}</p>
                                </td>
                                <td>
                                  <p>{itemInner.maritalStatus}</p>
                                </td>
                                <td>
                                  <p>{itemInner.groupName}</p>
                                </td>
                                <td>
                                  <p>{itemInner.phoneNumber}</p>
                                </td>
                                <td>
                                  <p>{itemInner.occupation}</p>
                                </td>
                              </tr>
                            );
                          })
                        : ""}
                    </tbody>
                  </table>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default List;