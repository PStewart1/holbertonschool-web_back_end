#!/usr/bin/python3
""" 0-main """
BasicCache = __import__('0-basic_cache').BasicCache

my_cache = BasicCache()
my_cache.print_cache()
my_cache.put("A", "Hello")
my_cache.put("B", "World")
my_cache.put("C", "Holberton")
my_cache.print_cache()
print(my_cache.get("A"))
print(my_cache.get("B"))
print(my_cache.get("C"))
print(my_cache.get("D"))
my_cache.print_cache()
my_cache.put("D", "School")
my_cache.put("E", "Battery")
my_cache.put("A", "Street")
my_cache.print_cache()
print(my_cache.get("A"))



# import time
# def complex_comp(a, b):
#     time.sleep(.5)
#     return a + b

# cache = {}
# def cached_comp(a, b):
    # key = (a,b)
    # if key in cache:
    #     r = cache(key)
    # else:
    #     r = complex_comp(a,b)
    #     cache[key] =r
    #     return r

    # return cache.setdefault((a,b), complex_comp(a,b))
