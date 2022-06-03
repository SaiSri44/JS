class book:
    def __init__(self, title, author, year):
        self.title = title
        self.author = author
        self.year = year

    def summary(self):
        print(f"{self.title} was written by {self.author} in the year {self.year}")


b1 = book("HarryPotter", "J.k Rowling", 1999)
b1.summary() 
