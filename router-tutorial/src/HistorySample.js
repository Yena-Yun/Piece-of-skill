import React, { Component } from "react";

class HistorySample extends Component {
  // 뒤로 가기
  handleGoBack = () => {
    this.props.history.goBack();
  };

  // 홈으로 이동
  handleGoHome = () => {
    this.props.history.push("/");
  };

  // (모든) 페이지에 변화가 생길 때마다 실행
  componentDidMount() {
    // 정말 나갈 것인지를 질문
    this.unblock = this.props.history.block("정말 떠나실 건가요?");
  }

  // HistorySample 컴포넌트가 언마운트되면
  componentWillUnmount() {
    // 질문을 멈춤 (=> history 페이지일 때만 질문)
    if (this.unblock) {
      this.unblock();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>홈으로</button>
      </div>
    );
  }
}

export default HistorySample;
