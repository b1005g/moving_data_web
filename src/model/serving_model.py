from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
import torch

app = FastAPI()

PATH = './model/model.h5'
model = torch.load(PATH)
model.eval()
class ForecastResponse(BaseModel):
    ds: str
    yhat: float

@app.get("/api/forecast/", response_model=list[ForecastResponse])
def get_forecast(days: int = 7):
    predict_date = model.make_future_dataframe(periods=days)
    forecast = model.predict(predict_date)
    recs = forecast[["ds","yhat"]].tail(days).to_dict(orient="records")
    # 날짜를 ISO 문자열로
    for r in recs:
        r["ds"] = r["ds"].strftime("%Y-%m-%d")
    return recs