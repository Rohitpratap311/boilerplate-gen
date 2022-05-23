import datetime
from sqlalchemy import Column, String, Integer, Boolean, DateTime
from .database import Base


class Todo(Base):
    __tablename__ = "todos"

    id = Column(Integer, primary_key=True, index=True)
    text = Column(String)
    completed = Column(Boolean, default=False)
