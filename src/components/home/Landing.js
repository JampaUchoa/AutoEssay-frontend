import React, { useState } from 'react';
import './landing.scss';

export default function Landing() {

  const emptyForm = {
    title: "",
    essay: "",
  };

  const [form, setForm] = useState(emptyForm)

  // Can be "writing", "revising", "evaluated"
  const [status, setStatus] = useState("writing")

  const changeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const postEssay = (e) => {
    /*
    //TODO to a POST to django with form content
    {
      title: STRING,
      essay: STRING
    }
    */
    setStatus("evaluated");
  }


  return (
    <div className="essay-container">
      <div className={`form ${status}`}>
        <div className="title" >
          <input type="text" name="title" required onChange={changeForm} value={form.title} placeholder="Escreva aqui seu titulo" />
        </div>
        <div className="essay">
          <textarea name="essay" required onChange={changeForm} value={form.essay} rows="25" />
        </div>
      </div>

      <Actions status={status} postEssay={postEssay} setStatus={setStatus} />
    </div>
  );
}

function Actions({ status, postEssay, setStatus }) {

  let content = "";

  if (status === "writing") {
    content = (
      <>
        <button onClick={() => setStatus("revising")}>
          Revisar
        </button>
        <button onClick={postEssay}>
          Avaliar
        </button>
      </>
    )
  } else if (status === "revising") {
    content = (
      <>
        <button onClick={() => setStatus("writing")}>
          Editar
        </button>
        <button onClick={postEssay}>
          Avaliar
        </button>
      </>
    )
  } else {
    content = (
      <>
        <button>
          Nova redação
        </button>
      </>
    )
  }

  return (
    <div className="actions">
      {content}
    </div>
  )


}

