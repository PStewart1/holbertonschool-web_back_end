#!/usr/bin/python3
""" FIFO caching  """
BaseCaching = __import__('base_caching').BaseCaching


class FIFOCache(BaseCaching):
    """ Defines the class FIFOCache, a 'First-In-First-Out' caching system,
        inheriting from BaseCaching.
    """

    def put(self, key, item):
        """ Add an item in the cache
        """
        if key is None or item is None:
            pass
        else:
            if len(self.cache_data) >= self.MAX_ITEMS:
                first = next(iter(self.cache_data))
                print(f"DISCARD: {first}")
                self.cache_data.pop(first)
            self.cache_data[key] = item

    def get(self, key):
        """ Get an item by key
        """
        if key is None or key not in self.cache_data.keys():
            return None
        else:
            return self.cache_data[key]
