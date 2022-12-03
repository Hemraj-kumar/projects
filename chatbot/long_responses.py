import random

R_EATING = "I don't like eating anything because I'm a bot obviously!"
R_ADVICE = "Meet Passionate Programmers Secretary You may get an advice!!"


def unknown():
    response = ["Could you please repeat that? ",
                "...",
                "Sounds about right.",
                "What do you mean?"][
        random.randrange(4)]
    return response