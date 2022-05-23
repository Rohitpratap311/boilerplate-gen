from datetime import datetime
from pydantic import BaseModel


class TodoBase(BaseModel):
    text: str


class TodoCreate(TodoBase):
    pass


class Todo(TodoBase):
    id: int
    completed: bool = False

    class config:
        orm_mode = True
