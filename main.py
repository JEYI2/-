생성, 수정, 업로드 불가 … 스토리지가 가득 찬 상태로 2년 이상 지나면 Drive와 Gmail에서 파일이 삭제될 수 있습니다.
# main.py
from fastapi import FastAPI

# FastAPI 애플리케이션 객체 생성
app = FastAPI()

# 기본 엔드포인트
@app.get("/")
def read_root():
    return {"message": "Hello World"}
