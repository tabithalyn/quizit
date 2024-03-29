const Score = () => {
  return (
    <>
      <audio ref={correctSound} src={correctNotification}></audio>
      <audio ref={incorrectSound} src={incorrectNotification}></audio>
      <audio ref={buttonSound} src={buttonSound}></audio>

      <div>
        <p>
          <span onClick={useFiftyFifty}>{fiftyFifty}</span>
        </p>
      </div>

      <div>
        <span className="left" style={{ float: 'left' }}>{currentQuestionIndex + 1} of {numberOfQuestions}</span>
      </div>

      <div>
        <span>{minutes}:{seconds}</span>
      </div>
    </>
  );
}
 
export default Score;