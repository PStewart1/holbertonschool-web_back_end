#!/usr/bin/python3
""" Basic dictionary """
BaseCaching = __import__('base_caching').BaseCaching


class BasicCache(BaseCaching):
    """ Defines the class BasicCache, a basic caching system,
        inheriting from BaseCaching.
    """

    def put(self, key, item):
        """ Add an item in the cache
        """
        if key is None or item is None:
            pass
        else:
            self.cache_data[key] = item

    def get(self, key):
        """ Get an item by key
        """
        if key is None or key not in self.cache_data.keys():
            return None
        else:
            return self.cache_data[key]
