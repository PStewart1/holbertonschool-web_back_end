#!/usr/bin/python3
""" LIFO caching  """
BaseCaching = __import__('base_caching').BaseCaching


class LIFOCache(BaseCaching):
    """ Defines the class LIFOCache, a 'Last-In-First-Out' caching system,
        inheriting from BaseCaching.
    """

    def put(self, key, item):
        """ Add an item in the cache
        """
        if key is None or item is None:
            pass
        else:
            if len(self.cache_data) >= self.MAX_ITEMS:
                last = self.cache_data.popitem()
                print(f"DISCARD: {last[0]}")
            self.cache_data[key] = item

    def get(self, key):
        """ Get an item by key
        """
        if key is None or key not in self.cache_data.keys():
            return None
        else:
            return self.cache_data[key]
