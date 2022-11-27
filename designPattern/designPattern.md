# 디자인 패턴

## 디자인 패턴이란?
- 어플리케이션 구조, 전략
- 목적에 맞는 가장 효과적인 개발 방법을 정리한 것
- 코드의 패턴을 디자인화 한 것

## 싱글턴 패턴
- 정의: 오직 하나의 인스턴스만을 생성해야 할 때 필요한 패턴
- 인스턴스는 독립적, 하나의 인스턴스는 각각의 메모리를 차지하게 됨


## 스트레티지 패턴
- 객체가 할 수 있는 행위를 하이레벨과 로우레벨로 나눠서 구현
- 하이레벨: 모든 객체가 상속받는 변하지 않는 큰 틀의 행동
- 로우레벨: 상속받는 객체의 종류에 따라 디테일한 변화가 가능한 행동을 의미

### 객체지향 패턴의 4가지 특징
1. 추상화
2. 캡슐화
3. 다형성
4. 상속