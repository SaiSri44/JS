#include <bits/stdc++.h>
using namespace std;
// As we are declaring the properties inside the class,using this keyword is optional in c++
// Using this also won't raise errors
// this keyword is nothng but the pointer pointing to location of the class, to acess the class properties, and class methods we can use the syntax this->property, this->method(paramters)
// this should be used compulsaryly when the paramters of the constructor function and properties of the class has same names, to differentiate b/w properties and paramters else no need to use this.
// In case of python we cannot declare the variables statically,they are assigned during runtime, there is no way to differentiate b/w constructor parameters and class properties, so we should compulsarly use the self keyword.
// In case of JavaScript varaible declaration is not allowed class, so there also we should use the this keyword. In case of JS there is no pointer topic, this is not a pointer to the class location.
class Book
{
private:
    string title, author;
    int year;

public:
    Book(string _title, string _author, int _year)
    {
        title = _title;
        author = _author;
        year = _year;
    }
    void summary()
    {
        cout << this->title << " was written by the " << this->author << " in the year " << this->year << endl;
    }
    string gettitle();
    static void getauthor()
    {
        cout << "We are in static function" << endl; 
    }
};

string Book::gettitle()
{
    return this->title;
}

int main()

{
    Book book("Harry Potter", "j.K Rowling", 1999);
    book.summary();
    Book.getauthor();
    return 0;
} 