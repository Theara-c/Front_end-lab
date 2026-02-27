function Score({ courseName, courseResult }) {
  //to perform the statistic process
  function Statistic({ result }) {
    let sum = 0;
    let max = result[0].score;
    let min = max;
    for (let i = 0; i < result.length; i++) {
      sum += result[i].score;
      if (max < result[i].score) max = result[i].score;
      if (min > result[i].score) min = result[i].score;
    }

    const avg = sum / result.length;
    return (
      <>
          <tr>
            <th>AVERAGE</th>
            <th>MIN</th>
            <th>MAX</th>
          </tr>
          <tr>
            <td>{avg}</td>
            <td>{min}</td>
            <td>{max}</td>
          </tr>
      </>
    );
  }
  function Display({ result }) {
    return (
      <>
        <tr>
          <td>{result.firstName}</td>
          <td>{result.lastName}</td>
          {result.score >= 50 ? (
            <td>{result.score}</td>
          ) : (
            <td className="warning">{result.score}</td>
          )}
        </tr>
      </>
    );
  }
  const num = 10;
  return (
    <>
      <div className="scores">
        <h1>{courseName}</h1>

        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {courseResult.map((item) => (
              <>
                <Display result={item} />
              </>
            ))}
            <hr />
            {/* I have not put it in div becuz it cause a bad layout */}
            <Statistic result = {courseResult} /> 
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Score;
