import React, { useState } from 'react';
import './landing.scss';
import { post } from 'constants.js';

export default function Landing() {


  const [results, setResults] = useState([])

  // Can be "writing", "revising", "evaluated"
  const [status, setStatus] = useState("writing")

  const emptyForm = {
    title: "",
    essay: "",
  };

  const [form, setForm] = useState(emptyForm)
  const changeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const postEssay = (e) => {
    post("/", form).then(res => setResults(res.scores))
    setStatus("evaluated");
  }

  const resetEssay = (e) => {
    setForm(emptyForm);
    setStatus("writing");
  }

  return (
    <div className="essay-container">

      <div className="essay">
        <div className={`form ${status}`}>
          <div className="title" >
            <input type="text" name="title" required onChange={changeForm} value={form.title} readOnly={status !== "writing"} placeholder="Escreva aqui seu titulo" />
          </div>
          <div className="content">
            <textarea name="essay" required onChange={changeForm} value={form.essay} readOnly={status !== "writing"} rows="25" />
          </div>
        </div>
        <Results status={status} results={results} />
      </div>

      <Actions status={status} postEssay={postEssay} setStatus={setStatus} resetEssay={resetEssay} />
    </div>
  );
}

function Actions({ status, postEssay, setStatus, resetEssay }) {

  let content = "";

  if (status === "writing") {
    content = (
      <>
        <button onClick={() => setStatus("revising")}>
          Revisar
        </button>
        <button className="action" onClick={postEssay}>
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
        <button className="action" onClick={postEssay}>
          Avaliar
        </button>
      </>
    )
  } else {
    content = (
      <>
        <button className="action" onClick={resetEssay}>
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

function Results({ results, status }) {
  const [currentResult, setCurrentResult] = useState(0);

  if (results.length === 0) return null;
  if (status !== "evaluated") return null;

  const categories = [
    "Escrita formal",
    "Compreensão do tema",
    "Defesa do ponto de vista",
    "Argumentação",
    "Proposta de intervenção"
  ]

  return (
    <div className="evaluation">
      <select
        onChange={(e) => setCurrentResult(results[e.target.value])}>
        {
          results.map((res, i) => (
            <option key={res.algorithm} value={i}>{res.algorithm}</option>
          ))
        }
      </select>
      <h3>
        Avaliação
      </h3>
      <ul>
        {categories.map((cat, i) => (
          <li className="category" key={cat}>
            <div className="main">
              <span className="title">
                {categories[i]}
              </span>
              <span className="score-badge">
                {currentResult[`category_${i + 1}`] || "ND"}
              </span>
            </div>
            <div className="bar-container">
              <div className="bar" style={{ width: currentResult[`category_${i + 1}`] * 0.5 + "%" }}></div>
            </div>
          </li>
        ))}
      </ul>
      <hr />
      <div className="total">
        Nota final
        <br />
        <div className="score">
          <span>{(currentResult && currentResult.score) || results[0].score} </span> / 10
          </div>
      </div>

    </div>
  )

}

