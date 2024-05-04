const teamEl = document.querySelector("#teamInput");
const nameEl = document.querySelector("#nameInput");
const emailEl = document.querySelector("#emailInput");
const phoneEl = document.querySelector("#phoneInput");

const smtbtn = document.querySelector(".btn-submit");
console.log(teamEl, nameEl, emailEl, phoneEl, smtbtn);

const postData = async (names, team, email, phone) => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        names,
        team,
        email,
        phone,
      }),
    });

    if (!res.ok) throw Error("Something went wrong");

    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

function submitForm(e) {
  e.preventDefault();
  const teamValue = teamEl.value;
  const nameValue = nameEl.value;
  const emailValue = emailEl.value;
  const phoneValue = phoneEl.value;
  console.log(teamValue, nameValue, emailValue, phoneValue);
  postData(nameValue, teamValue, emailValue, phoneValue);
}

smtbtn.addEventListener("click", submitForm);
