#!/usr/bin/python3
""" 1-main """
FIFOCache = __import__('1-fifo_cache').FIFOCache

my_cache = FIFOCache()
my_cache.put("A", "Hello")
my_cache.put("B", "World")
my_cache.put("C", "Holberton")
my_cache.put("D", "School")
my_cache.print_cache()
my_cache.put("E", "Battery")
my_cache.print_cache()
my_cache.put("C", "Street")
my_cache.print_cache()
my_cache.put("F", "Mission")
my_cache.print_cache()



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
